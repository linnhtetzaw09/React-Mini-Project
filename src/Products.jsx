import React from "react";
import "./App.css";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "FoodSet Series 1",
      price: "13,000",
      image:
        "https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/328036766_764542991259838_8296293591111898069_n.jpg?stp=dst-jpg_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=da31f3&_nc_ohc=j4wnDT7exmsAX8pIk8z&_nc_oc=AQnHNyZFCf2NtZFUI8bdhVjv7OxEoQ0lBT_szkLWInkNxfyoSUAGyYI4OMbW4bOKFHI&_nc_ht=scontent-ams4-1.xx&oh=00_AfCj2_BDvV8cWC3mQS0l0oGFLjtAAxD6NmlQut1ij1udIw&oe=63EF2BE7",
    },
    {
      id: 2,
      title: "FoodSet Series 2",
      price: "14,500",
      image:
        "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/323301337_1252837088780695_6354352540650083614_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=tBo-7jFuMtsAX-aNIJN&_nc_ht=scontent-ams2-1.xx&oh=00_AfDBjiTjgJGiarysZI60XMgkmNyste8f6Na3XI791LwJYA&oe=63F05E09",
    },
    {
      id: 3,
      title: "FoodSet Series 3",
      price: "17,000",
      image:
        "https://scontent-ams4-1.xx.fbcdn.net/v/t45.5328-4/297439101_7679553838785404_3252990037132528672_n.jpg?stp=dst-jpg_p960x960&_nc_cat=109&ccb=1-7&_nc_sid=c48759&_nc_ohc=kVGB9t67xRUAX-t05ba&tn=7yEOA8ULVtHlW7RA&_nc_ht=scontent-ams4-1.xx&oh=00_AfA-69DYyHoK4SnT3sOkEjmbW-L6e3Y8TJE4Df7IO7-QtA&oe=63F06B54",
    },
    {
      id: 4,
      title: "FoodSet Series 4",
      price: "15,000",
      image:
        "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/325763921_722292136190623_5485618380229429483_n.jpg?stp=dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=da31f3&_nc_ohc=iIrVB9NsKg8AX91QSqb&tn=7yEOA8ULVtHlW7RA&_nc_ht=scontent-ams2-1.xx&oh=00_AfATTw1lh_ONVkwA9TmX_3wJfTIwAi8IC0Vvq_0jjhk2sQ&oe=63F028C6",
    },
    {
      id: 5,
      title: "FoodSet Series 5",
      price: "20,000",
      image:
        "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/326330737_830971064868512_3234691360353063297_n.jpg?stp=c34.0.206.206a_dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=E1Hvf_C4BW0AX8Jm2bK&_nc_ht=scontent-ams2-1.xx&oh=00_AfCDWtwB6-3kB7Nc_ibd1vSVrcK1OLbEOVJfVggBINCkag&oe=63EF59A0",
    },
    {
      id: 6,
      title: "FoodSet Series 6",
      price: "19,200",
      image:
        "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/329588717_614366070499421_7373513840262945046_n.jpg?stp=c0.17.206.206a_dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=npR1ZF3OXG8AX_1KEoT&_nc_ht=scontent-ams2-1.xx&oh=00_AfA8LQYbKZPFacWQ8Q8ad2fSZHdlulQ9LZdNk0zkZqn_Gg&oe=63EF9E19",
    },
    {
      id: 7,
      title: "FA FoodSet",
      price: "9,900",
      image:
        "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/327068866_1267733007421809_939318610666115026_n.jpg?stp=dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=da31f3&_nc_ohc=rCdmSa1HIb4AX_ipGGp&tn=7yEOA8ULVtHlW7RA&_nc_ht=scontent-ams2-1.xx&oh=00_AfBOlfDrHlsAe7GHHP81NXmcr0V3twC74hgLr5YB9nAkSw&oe=63EF3C40",
    },
    {
      id: 8,
      title: "Spaghetti",
      price: "5,000",
      image:
        "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/328259864_1231645340773880_1332725313943948677_n.jpg?stp=c0.17.206.206a_dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=JWk4vGjCL2oAX82_Xoq&tn=7yEOA8ULVtHlW7RA&_nc_ht=scontent-ams2-1.xx&oh=00_AfAxolskuYTDj8AVteFCl696_QiE5WPAHqZCfLnvbps0WQ&oe=63F0D2C9",
    },
    {
      id: 9,
      title: "Spicy Octopus",
      price: "5,500",
      image:
        "https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/329586945_6305970779413926_4853906838250085195_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=da31f3&_nc_ohc=bTrrLL-OVWMAX_1jdZU&tn=7yEOA8ULVtHlW7RA&_nc_ht=scontent-ams4-1.xx&oh=00_AfDmjnArTt0lmqAgtJRJBRCq0l5PlBdbVbi3tLtf6p39_w&oe=63EF467C",
    },
    {
      id: 10,
      title: "Mala Noodle",
      price: "4,500",
      image:
        "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/327466385_1827712000919642_7017886925363372452_n.jpg?stp=dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=mlRQvVvaqs0AX9xhO1g&tn=7yEOA8ULVtHlW7RA&_nc_ht=scontent-ams2-1.xx&oh=00_AfA8kNrxWBZNOjYIJjhyuId5arYOOehhXXaNQom4Ejnp3Q&oe=63F0719D",
    },
    {
      id: 11,
      title: "Spring Roll Set",
      price: "12,000",
      image:
        "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/326797974_549366797140361_2333410950090608567_n.jpg?stp=dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=A-vAr4zWg60AX_fOFvL&_nc_ht=scontent-ams2-1.xx&oh=00_AfA0NeRaGmc1xGbzqehzZQlsTDexGVODJXxVrt8cwYaTSQ&oe=63EFAA14",
    },
    {
      id: 12,
      title: "Fried Kimbap",
      price: "3,500",
      image:
        "https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/323685454_815283552892443_2877049654367324409_n.jpg?stp=dst-jpg_p206x206&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_ohc=M_-Wrt7BaakAX8vE_MP&_nc_ht=scontent-ams4-1.xx&oh=00_AfB4lWM0snZV2E3Kwv1SeAVQz17qz_Ip5THnq8RoR5sN8g&oe=63EF46BD",
    },
    {
      id: 13,
      title: "Mala Potato",
      price: "3,300",
      image:
        "https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/326010840_509594071051235_6752637817058244489_n.jpg?stp=dst-jpg_p206x206&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_ohc=ZR9_ucAyNNwAX9AGniX&_nc_ht=scontent-ams4-1.xx&oh=00_AfBUYpbhznyHxELwRktW-gAcCZT9EeL3vd2JR60QkhFHWg&oe=63F02287",
    },
    {
      id: 14,
      title: "PHO Beef Noodle",
      price: "4,500",
      image:
        "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/319270791_1372310386637780_1590518608696315011_n.jpg?stp=cp6_dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=da31f3&_nc_ohc=o6oCxRku3bEAX8uXdEu&_nc_ht=scontent-ams2-1.xx&oh=00_AfAHHh69wA052J60tq9RVi2FWqhvcWn9oB7jdFKB5z05qQ&oe=63EFD791",
    },
    {
      id: 15,
      title: "Kimchi Fried Rice",
      price: "4,000",
      image:
        "https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/316676664_1361738967694922_8463840915221676139_n.jpg?stp=dst-jpg_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=da31f3&_nc_ohc=D-3d-F_tYY8AX_Tmzkg&tn=7yEOA8ULVtHlW7RA&_nc_ht=scontent-ams4-1.xx&oh=00_AfAXkiuek6VQEIbB8rftJXyCsNjWolySpx2CRlj26NAVVA&oe=63F0EB0D",
    },
    {
      id: 16,
      title: "Pa Shu Fried Rice",
      price: "4,000",
      image:
        "https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/329252979_1160937404608116_2926035407066353113_n.jpg?stp=dst-jpg_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=da31f3&_nc_ohc=4U1r4xz8KYQAX9s7dtz&tn=7yEOA8ULVtHlW7RA&_nc_ht=scontent-ams4-1.xx&oh=00_AfCNEpaAFE7gKFI7lTZBbbMUZCVJW3jQ9VR_-LwyoDHOhw&oe=63EFD489",
    },
    {
      id: 17,
      title: "American Fried Rice",
      price: "4,000",
      image:
        "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/329341529_3530539810512554_1603789702968833306_n.jpg?stp=dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=ok3lWaa_ch0AX-aIKW9&_nc_ht=scontent-ams2-1.xx&oh=00_AfCkzPQmWgD7otUBhfaYULbCWx7LwtfdD7xz8FGtFvZ2nA&oe=63F077A5",
    },
    {
      id: 18,
      title: "Tom Yum Fried Rice",
      price: "4,000",
      image:
        "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/329145905_874425453815955_2359070000702162818_n.jpg?stp=dst-jpg_p206x206&_nc_cat=105&ccb=1-7&_nc_sid=da31f3&_nc_ohc=JhyHaZhzJaoAX8INnpD&_nc_ht=scontent-ams2-1.xx&oh=00_AfCMj6fZmJlcdNbeUKn5uy1MYbZjtFy9Q31OjZ5CDBb8fA&oe=63EF1570",
    },
    {
      id: 19,
      title: "Kimchi Soup with Prawn",
      price: "5,000",
      image:
        "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/315130315_1353615261840626_6206008909378624516_n.jpg?stp=dst-jpg_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=da31f3&_nc_ohc=hm2MyYzkq44AX8BtgXA&_nc_ht=scontent-ams2-1.xx&oh=00_AfArZcCjHGQgATHceAlgfcoUKw-gon4iTosxcWw3hdLY8Q&oe=63F0EC92",
    },
    {
      id: 20,
      title: "Avocado Smoothie",
      price: "3,000",
      image:
        "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/329943865_477561344418039_477150077391786523_n.jpg?stp=dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=8bxC_rDwH4QAX9L_vwc&_nc_ht=scontent-ams2-1.xx&oh=00_AfD5jFdw5NIGUeu8p39LCg_B0ouXSSCMTnr83RWqJPmqOA&oe=63F0A9C0",
    },
    {
      id: 21,
      title: "Yogurt Coffee",
      price: "3,000",
      image:
        "https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/329652992_6090277107717640_801948796718133928_n.jpg?stp=dst-jpg_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=da31f3&_nc_ohc=vfGrwEH5ys8AX-gmgh9&tn=7yEOA8ULVtHlW7RA&_nc_ht=scontent-ams4-1.xx&oh=00_AfAZspZN_jVL9iaNVMo3QLcBc6PtjBiCSpUGBRSM2LN-iQ&oe=63EFD2CB",
    },
    {
      id: 22,
      title: "Coconut Coffee",
      price: "3,500",
      image:
        "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/329206235_1150419565630067_8784241472682587218_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=BvXkT_sV6scAX8utunc&tn=7yEOA8ULVtHlW7RA&_nc_ht=scontent-ams2-1.xx&oh=00_AfCxX3ciyHsM0vJWbacXjYMxvZxNs3d1PRMzPMB6F88miQ&oe=63EF147A",
    },
    {
      id: 23,
      title: "Orange Juice",
      price: "3,000",
      image:
        "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/315893033_1359484511253701_3559633050942632206_n.jpg?stp=dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=i-ZM3SU1ntcAX9uC0zd&_nc_ht=scontent-ams2-1.xx&oh=00_AfBepe25yeiQPDRdGKQ95RdgpXPqlJCx6XKlLiLa8RQEYA&oe=63EFD86B",
    },
    {
      id: 24,
      title: "Strawberry Yogurt",
      price: "3,000",
      image:
        "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/321786194_935230457733223_1262537479155457777_n.jpg?stp=dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=ZLEg3GykSgUAX-JsTQS&_nc_ht=scontent-ams2-1.xx&oh=00_AfDOtU3xlPGe_O35Q-4wBePGyn2pGt_BCmgd_kJt5q-i0w&oe=63F0221E",
    },
    {
      id: 25,
      title: "Strawberry Smoothie",
      price: "3,000",
      image:
        "https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/328938368_903367727521814_7548639893601456335_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=da31f3&_nc_ohc=_HD-SLtGCIIAX8bRo4K&tn=7yEOA8ULVtHlW7RA&_nc_ht=scontent-ams4-1.xx&oh=00_AfCj-HTUKMQzE8dDV5RSGDkEVpYssUasIP21r9BRBgbdyA&oe=63EF66F1",
    },
    {
      id: 26,
      title: "Avocado Yogurt",
      price: "3,000",
      image:
        "https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/325164793_896945648160781_7945944134260348094_n.jpg?stp=dst-jpg_p206x206&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_ohc=RmzoRR1sWVMAX9P9Hxf&_nc_ht=scontent-ams4-1.xx&oh=00_AfDYFdix67zInvBlm-HW464pLmS4D9wveq5O3U5btiAntg&oe=63EFAAC0",
    },
    {
      id: 27,
      title: "Passion Juice",
      price: "3,000",
      image:
        "https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/321681212_692992135597072_1062697116569852344_n.jpg?stp=dst-jpg_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=da31f3&_nc_ohc=3sP8NOOvB_4AX88VHM9&_nc_ht=scontent-ams4-1.xx&oh=00_AfBnI0TObuzl7TtXCZxtVAK_E0WGLoqx5G7nMp1PNfP-pA&oe=63EF4E50",
    },
    {
      id: 28,
      title: "Peach Tea",
      price: "3,000",
      image:
        "https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/329208636_733156221728408_5271775510836337800_n.jpg?stp=dst-jpg_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=da31f3&_nc_ohc=4IyC9A5E6VcAX9YZmhI&_nc_ht=scontent-ams4-1.xx&oh=00_AfCa3tryfU9RAodmxBpng-9YP1GdBUdohivKldtkwvhbHw&oe=63EF45FE",
    },
    {
      id: 29,
      title: "Phin Filter Coffee",
      price: "3,000",
      image:
        "https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/319386153_519417016886778_5769679285707734322_n.jpg?stp=c0.17.206.206a_dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=da31f3&_nc_ohc=Ckc50OFL8HkAX83_-Yo&_nc_ht=scontent-ams4-1.xx&oh=00_AfC1ZWflvGfuBWNtzK84c2ZkrXURgDdUNwKpX_mpL6BIbA&oe=63EFC2BA",
    },
  ];

  return (
    <div className="main d-flex flex-wrap justify-content-center gap-5 my-5">
      {products.map((product) => (
        <div className="card" style={{ width: "12rem" }}>
          <img
            src={product.image}
            height="150px"
            className="mx-auto my-5"
            alt=""
          />

          <div className="card-body">
            <p className="card-title">{product.title}</p>
            <h4>{product.price}ks</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
