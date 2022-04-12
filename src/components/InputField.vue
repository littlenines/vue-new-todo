<template>
  <div class="todo-form">
        <input type="text" v-model="inputTodo"  class="todo-input-field" maxlength="35"/>
        <button
          @click="submitTodo"
          v-if="editIndex === null"
          class="todo-button"
        >
          ADD
        </button>
        <div class="todo-edit" v-else>
          <button class="edit-button"><i @click="submitEdit" class="mdi mdi-check checked-icon"></i></button>
          <button class="edit-button"><i @click="closeEdit" class="mdi mdi-close"></i></button>
        </div>
      </div>
</template>

<script>
export default {
    name: 'InputField',
    props: {
      editInput: String,
      editIndex: Object
    },

    data() {
      return { 
        inputTodo: "",
      }
    },

    watch: {
      editInput(value) {
        this.inputTodo = value;
      }
    },

    methods: {
      submitTodo() {
        this.$emit("submitEventTodo", this.inputTodo);
        this.inputTodo = "";
      },

      submitEdit() {
        this.$emit("submitEditTodo", this.inputTodo)
        this.inputTodo = "";
      },

      closeEdit() {
        this.$emit("closeEditTodo")
        this.inputTodo = ""
        this.editIndex = null;
      }
    }
}
</script>

<style lang="scss">
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

.todo-edit {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
}

.edit-button {
  background-color: transparent;
  margin-right: 2px;
}

.checked-icon {
  color: $checked-icon;
}
</style>