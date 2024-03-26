import React, { useState } from "react";

// const App = () => {
//   return (
//     <>
//       {/* <Card string="hello" /> */}
//       {/* <Card getSum={2} /> */}
//       {/* <Card getFunction={() => {
//           return(
//             "Hello"
//           )
//         }}
//       /> */}
//       {/* {<Card getObj = {{name: "Alex", gender: "Female"}}/>} */}
//       {/* {<Card getArr = {["string",5,false]}/>} */}
//    </>
//   );
// };

//     let obj = {
//       backgroundColor: "red",
//       border: "1p solid green",
//       width: "50px",
//       height: "100px",
//       color: "blue",
//       borderRadius: "10px"
//     }

// const App = () => {
//   return (
//     <>
//     <Card borderRadius = {obj.borderRadius} backgroundColor = {obj.backgroundColor}/>
//     </>
//   )
// }

const App = () => {
  // const [products, setProducts] = useState([]);
  // fetch("https://fakestoreapi.com/products/")
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));
  //   // setProducts вместо консоль нужно написать
  // console.log(products);

  const [products, setProducts] = useState([]);
  fetch("https://fakestoreapi.com/products/")
    .then((res) => res.json())
    .then((json) => setProducts(json));
  console.log(products);

  return (
    <>
      {/* {products.length && products.map((el) => (
     <div className="card">
        <div className="image">
          <img src={el.image} alt={el.title} />
        </div>
        <div className="info">
          <p className="title"> Title: {el.title}</p>
          <p className="price">Price: ${el.price}</p>
          <p className="desk"> Desk: {el.description}</p>
        </div>
      </div> 
    ))} */}
      {/* это библиотека */}
      {/* <Header /> */}
      <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
        <div class="container">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/2 xl:w-1/3 px-4">
              <div class="bg-white rounded-lg overflow-hidden mb-10">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
                  alt="image"
                  class="w-full"
                />
                <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      50+ Best creative website themes & templates
                    </a>
                  </h3>
                  <p class="text-base text-body-color leading-relaxed mb-7">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing
                    elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                    href="javascript:void(0)"
                    class="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 px-4">
              <div class="bg-white rounded-lg overflow-hidden mb-10">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg"
                  alt="image"
                  class="w-full"
                />
                <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      The ultimate UX and UI guide to card design
                    </a>
                  </h3>
                  <p class="text-base text-body-color leading-relaxed mb-7">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing
                    elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                    href="javascript:void(0)"
                    class="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 px-4">
              <div class="bg-white rounded-lg overflow-hidden mb-10">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
                  alt="image"
                  class="w-full"
                />
                <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      Creative Card Component designs graphic elements
                    </a>
                  </h3>
                  <p class="text-base text-body-color leading-relaxed mb-7">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing
                    elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                    href="javascript:void(0)"
                    class="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;

/* // Создайте родительский компонент и передайте ему пропс с текстовым значением. Затем выведите это значение внутри дочернего компонента.

// Передайте числовое значение в пропс и выполните какие-то математические операции внутри дочернего компонента, используя это значение */

// Передайте функцию в пропс и вызовите ее из дочернего компонента.

// Передайте объект в пропс и отобразите его свойства в дочернем компоненте.

// 5
// Создайте массив в родительском компоненте и передайте его в пропс дочернему компоненту. Затем отобразите каждый элемент массива внутри дочернего компонента.
// 6
// Создайте родительский компонент, который передает объект стилей в дочерний компонент через пропсы. Дочерний компонент должен использовать эти стили для своего внешнего вида.
// 7
// Создайте дочерний компонент, который использует деструктуризацию для извлечения значений из пропсов.
