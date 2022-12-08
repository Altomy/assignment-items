const NewItem = () => {
  return (
    <div className="newItem flex items-center justify-end">
      <div className="newItemButton">
        <button class="hover:bg-gray-200 bg-gray-100 text-black text-grey-darkest font-bold py-2 gap-2 px-4 rounded inline-flex items-center">
          <span>&#43;</span>
          <span>New Item</span>
        </button>
      </div>
    </div>
  );
};

export default NewItem;
