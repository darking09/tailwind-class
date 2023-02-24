function Form() {
  return (
    <div className="grid grid-cols-1 gap-6 pt-8 px-4">
      <input type="email" className="form-input px-4 py-3 rounded-full shadow-xl" />
      <select className="form-select px-4 py-3 rounded-full">
        <option>First Option</option>
      </select>
      <input type="checkbox" className="form-checkbox rounded text-pink-500" />
    </div>
  );
}

export default Form;
