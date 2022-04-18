<template>
  <div class="todo-form">
        <input type="text" v-model="inputTodo"  class="todo-input-field" maxlength="35" data-test="input"/>
        <button
          @click="submitTodo"
          v-if="editIndex === -1"
          class="todo-button"
          data-test="button"
        >
          ADD
        </button>
        <div class="todo-edit" v-else>
          <button class="edit-button" @click="submitEdit"><mdicon name="check" class="checked-icon"/></button>
          <button class="edit-button" @click="closeEdit" data-test="edit-input"><mdicon name="close" /></button>
        </div>
      </div>
</template>

<script>
export default {
    name: 'InputField',
    props: {
      editIndex: Number,
      editInput: String
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