const Banner = () => {
  return (
    <div className="relative bg-gray-50 h-80 flex justify-center items-center rounded-b-xl">
        <img src="/src/assets/Resources/Clothing.png" alt="Overly" 
        className="absolute inset-0 w-full h-full object-cover opacity-10" />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-black">I Grow By Helping People In Need</h1>
        <div className="flex justify-center items-center">

          <input type="text" 
          className="border border-gray-300 bg-white text-black rounded-l-md p-2 focus:outline-none w-80" 
          placeholder="Search" />

          <button className="border border-orange-600 bg-orange-700 text-white p-2 rounded-r-md">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;