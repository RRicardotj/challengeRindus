export default {
  name: 'PostForm',
  props: {
    isEdit: {
      type: Boolean,
      required: false,
      default: false,
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    body: {
      type: String,
      required: false,
      default: '',
    },
  },
  emits: ['update:title', 'update:body', 'submit'],
  methods: {
    submit() {
      this.$emit('submit');
    },
    onTitleInput(event) {
      this.$emit('update:title', event.target.value);
    },
    onBodyInput(event) {
      this.$emit('update:body', event.target.value);
    },
  },
};
