import React from 'react'

function TodoInput() {
  return (
    <>
      <section class="text-gray-400 bg-gray-900 body-font">
      
        
        <div class="w-1/3 p-5 rounded-xl border border-violet-500">
          <h2 class="text-white text-lg font-medium title-font mb-5">To Do List</h2>
          <div class="relative mb-4">
            <label for="full-name" class="leading-7 text-sm text-gray-400">Task</label>
            <input type="text" id="full-name" name="full-name" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          
          <button class="text-white bg-indigo-500 border-0 rounded-full py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">+</button>
          
        </div>
      
    </section>
    </>
  )
}

export default TodoInput