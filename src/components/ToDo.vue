<template>
  <div class="container">
    <section class="todo">
      <div class="todo-form">
        <input type="text" v-model="inputTodo" class="todo-input-field" />
        <button
          @click="submitTodo"
          v-if="editIndex === null"
          class="todo-button"
        >
          CLICK
        </button>
        <button @click="submitEdit" v-else class="todo-button">EDIT</button>
      </div>
      <div class="todo-items">
        <ul>
          <li
            v-for="(item, index) in items"
            :key="item.id"
            class="todo-item"
          >
            <p :class="{ done: item.done }" @click="itemDone(item)">{{ item.label }}</p>
            <div class="todo-icons">
              <i
                @click="editTodo(item, index)"
                class="mdi mdi-pencil-circle edit-icon"
              ></i>
              <i
                @click="deleteTodo(index)"
                class="mdi mdi-close-circle delete-icon"
              ></i>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ToDo",
  data() {
    return {
      inputTodo: "",
      editIndex: null,
      newValue: "",
      items: [
        { id: 1, label: "Buy milk", done: false },
        { id: 2, label: "Do a flip", done: false },
      ],
    };
  },
  mounted() {
    this.items = JSON.parse(localStorage.getItem("items"));
  },
  methods: {
    submitTodo() {
      this.items.push({
        id: this.items.length + 1,
        label: this.inputTodo,
        checked: false,
      });
      this.inputTodo = "";
      const parsed = JSON.stringify(this.items);
      localStorage.setItem("items", parsed);
    },

    editTodo(aa, ind) {
      this.inputTodo = aa.label;
      this.editIndex = ind;
    },

    submitEdit() {
      this.items[this.editIndex].label = this.inputTodo;
      this.editIndex = null;
      this.inputTodo = "";
      const parsed = JSON.stringify(this.items);
      localStorage.setItem("items", parsed);
    },

    deleteTodo(index) {
      this.items.splice(index, 1);
      const parsed = JSON.stringify(this.items);
      localStorage.setItem("items", parsed);
    },
    itemDone(item) {
      item.done = !item.done;
      const parsed = JSON.stringify(this.items);
      localStorage.setItem("items", parsed);
    },
  },
};
</script>
<style lang="scss">
.todo {
  border-radius: 10px;
  border: 0.5px solid $black;
}

.todo-form {
  display: flex;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid $black;
  background-color: $background-primary;
}

.todo-input-field {
  margin-right: 5px;
  flex: 1;
}

.todo-button {
  color: $button-text;
  background-color: $button-background;
}

.todo-items {
  padding: 10px;
  border-radius: 0 0 10px 10px;
  background: $white url("@/assets/paper.jpg");
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  margin-bottom: 5px;
  border-radius: 10px;
  border: 2px solid $black;
  background-color: $item-background;
}

.done {
  text-decoration: line-through;
}

.edit-icon,
.delete-icon {
  color: $background-secondary;
  font-size: 1.5rem;
  cursor: default;
  z-index: 1;
}

.delete-icon {
  color: $background-primary;
}
</style>