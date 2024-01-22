const Counter = () => {
  const handleDecrease = () => {
    setCount(count - 1);
  };
  const handleIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div class="p-10 justify-center text-center items-center">
      <div class="flex space-x-4 justify-center text-center items-center">
        <button
          onClick={handleDecrease}
          class="px-2 py-auto bg-black text-white rounded hover:bg-red-500"
        >
          -
        </button>
        <button
          onClick={handleIncrease}
          class="px-2 py-auto bg-green-500 text-white rounded hover:bg-lime-400"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
