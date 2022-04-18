<template>
  <div class="todo-items">
    <ul>
      <li v-for="(item, index) in items" :key="item.id" class="todo-item" data-test="list">
        <p :class="{ done: item.done }" @click="itemDone(item)" data-test="label">
          {{ item.label }}
        </p>
        <div class="todo-icons">
          <mdicon name="PencilCircle" @click="editTodo(item, index)"
            class="edit-icon"
            data-test="edit"/>
          <mdicon name="CloseCircle" @click="deleteTodo(index)"
            class="delete-icon"
            data-test="delete"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListItems",
  props: {
    items: Array,
  },

  methods: {
    editTodo(item, index) {
      this.$emit("editTodo", item, index);
    },

    deleteTodo(index) {
      this.$emit("deleteTodo", index);
    },

    itemDone(item) {
      this.$emit("itemDone", item);
    },
  },
};
</script>

<style lang="scss">
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

.todo-icons {
  display: flex;
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