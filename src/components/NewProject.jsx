import Input from './Input.jsx'
export default function NewProject() {
  return (
    <div>
        <menu>
            <li><button>Cancel</button></li>
            <li><button>Save</button></li>
        </menu>
      <div>
        <p>
          <label for="title">Title </label>
          <input type="text" name="title" id="title" required />
        </p>
        <p>
          <label for="description">Description </label>
          <textarea
            type="text-area"
            name="description"
            id="description"
            required
          />
        </p>
        <p>
          <label for="date">Due Date </label>
          <input type="date" name="date" id="date" required />
        </p>
      </div>
    </div>
  );
}
