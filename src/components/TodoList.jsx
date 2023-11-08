import React from "react";
import { useState } from "react";

function TodoList(props) {
  return (
    <>
      <section class="text-gray-400 bg-gray-900 body-font my-5">
        <div class="w-1/3 p-5 rounded-xl border border-violet-500">
          <h2 class="text-white text-lg font-semibold title-font mb-5">
            {props.item}
          </h2>

          <button class="text-white bg-red-500 border-0 rounded-full py-2 px-8 focus:outline-none hover:bg-red-600 text-lg">
            X
          </button>
        </div>
      </section>
    </>
  );
}

export default TodoList;
