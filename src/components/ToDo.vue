<template>
  <div class="container">
    <section class="todo">
      <InputField
        :editIndex="editIndex"
        :editInput="editInput"
        @submitEventTodo="submitTodo"
        @submitEditTodo="submitEdit"
        @closeEditTodo="closeEdit"
      />
      <ListItems
        :items="items"
        @editTodo="editTodo"
        @deleteTodo="deleteTodo"
        @itemDone="itemDone"
      />
    </section>
  </div>
</template>

<script>
import InputField from "./InputField.vue";
import ListItems from "./ListItems.vue";
import { setLocalStorage, getLocalStorage } from "@/utils/storage.js";
export default {
  name: "ToDo",
  components: {
    InputField,
    ListItems,
  },
  data() {
    return {
      editIndex: null,
      editInput: "",
      items: [
        { id: 1, label: "Buy milk", done: false },
        { id: 2, label: "Do a flip", done: false },
      ],
    };
  },
  mounted() {
    if (localStorage.getItem("items")) {
      this.items = getLocalStorage("items");
    }
  },
  methods: {
    submitTodo(addedValue) {
      if (this.items.length >= 10 || !addedValue.trim()) {
        return null;
      } else {
        this.items.push({
          id: this.items.length + 1,
          label: addedValue,
          done: false,
        });
        setLocalStorage("items", this.items);
      }
    },

    editTodo(editValue, currentIndex) {
      this.editInput = editValue.label;
      this.editIndex = currentIndex;
    },

    submitEdit(inputValue) {
      this.items[this.editIndex].label = inputValue;
      this.editIndex = null;
      setLocalStorage("items", this.items);
    },

    closeEdit() {
      this.editIndex = null;
    },

    deleteTodo(index) {
      this.items.splice(index, 1);
      setLocalStorage("items", this.items);
    },

    itemDone(item) {
      item.done = !item.done;
      setLocalStorage("items", this.items);
    },
  },
};
</script>
<style lang="scss">
.todo {
  border-radius: 10px;
  border: 0.5px solid $black;
}
</style>
