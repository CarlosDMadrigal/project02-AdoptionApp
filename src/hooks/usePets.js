import { useEffect, useState } from 'react'

export const usePetsByTypeAndName = (type, name) => {
 const [pets, setPets] = useState([])
 usePets()

 useEffect(() => {
  let list = JSON.parse(localStorage.getItem('pets'))
  let newList = []
  for (let i = 0; i < list.length; i++) {
   if (
    list[i].type === type &&
    list[i].name.toLowerCase().includes(name.toLowerCase())
   ) {
    newList.push(list[i])
   }
  }
  setPets(newList)
 }, [type, name])

 return {
  pets,
 }
}

export const usePetById = id => {
 const [pet, setPet] = useState({})

 useEffect(() => {
  let list = JSON.parse(localStorage.getItem('pets'))
  for (let i = 0; i < list.length; i++) {
   if (list[i].id == id) {
    setPet(list[i])
   }
  }
 }, [id])

 return {
  pet,
 }
}

export const usePets = () => {
 useEffect(() => {
  localStorage.setItem(
   'pets',
   JSON.stringify([
    {
     id: 0,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog01.jpg',
     type: 'dog',
     gender: 'Male',
     mail: 'davidemadrigal@gmail.com',
     name: 'Scary Terry',
     info: `He's a good boy, but right now I have to leave the country and can't take him with  me.`,
    },
    {
     id: 1,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog02.jpg',
     type: 'dog',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Poppy',
     info: `Found him starving near my house and took  him in,  but I'm not allowed to keep pets were I live.`,
    },
    {
     id: 2,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog03.jpg',
     type: 'dog',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Molly',
     info: `She was my girlfriend dog, but I can't keep her since I'm moving from  my place.`,
    },
    {
     id: 3,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog04.jpg',
     type: 'dog',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Bella',
     info: `Found her lost in the forest, when we fed her she smiled at us and we took this picture.`,
    },
    {
     id: 4,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog05.jpg',
     type: 'dog',
     gender: 'Male',
     mail: 'davidemadrigal@gmail.com',
     name: 'Alfie',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 5,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog06.jpg',
     type: 'dog',
     gender: 'Male',
     mail: 'davidemadrigal@gmail.com',
     name: 'Charlie',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 6,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog07.jpg',
     type: 'dog',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Daisy',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 7,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog08.jpg',
     type: 'dog',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Rosie',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 8,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog09.jpg',
     type: 'dog',
     gender: 'Male',
     mail: 'davidemadrigal@gmail.com',
     name: 'Teddy',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 9,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog10.jpg',
     type: 'dog',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Lola',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 10,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog11.jpg',
     type: 'dog',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Millie',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 11,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog12.jpg',
     type: 'dog',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Robert',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 12,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat01.jpg',
     type: 'cat',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Frida',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 13,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat02.jpg',
     type: 'cat',
     gender: 'Male',
     mail: 'davidemadrigal@gmail.com',
     name: 'Tiger',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 14,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat03.jpg',
     type: 'cat',
     gender: 'Male',
     mail: 'davidemadrigal@gmail.com',
     name: 'Tigger',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 15,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat04.jpg',
     type: 'cat',
     gender: 'Male',
     mail: 'davidemadrigal@gmail.com',
     name: 'Max',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 16,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat05.jpg',
     type: 'cat',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Smokey',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 17,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat06.jpg',
     type: 'cat',
     gender: 'Male',
     mail: 'davidemadrigal@gmail.com',
     name: 'Sam',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 18,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat07.jpg',
     type: 'cat',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Kitty',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 19,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat08.jpg',
     type: 'cat',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Sassy',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 20,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat09.jpg',
     type: 'cat',
     gender: 'Male',
     mail: 'davidemadrigal@gmail.com',
     name: 'Shadow',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 21,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog13.jpg',
     type: 'dog',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Cookie',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 22,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog14.jpg',
     type: 'dog',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Charlie',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 23,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog15.jpg',
     type: 'dog',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Max',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 24,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog16.jpg',
     type: 'dog',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Buddy',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 25,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat10.jpg',
     type: 'cat',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Felix',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 26,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat11.jpg',
     type: 'cat',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Sam',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 27,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat12.jpg',
     type: 'cat',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Coco',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 28,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat13.jpg',
     type: 'cat',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Chloe',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 29,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat14.jpg',
     type: 'cat',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Misty',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 30,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat15.jpg',
     type: 'cat',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Simba',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
    {
     id: 31,
     picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat16.jpg',
     type: 'cat',
     gender: 'Female',
     mail: 'davidemadrigal@gmail.com',
     name: 'Missy',
     info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ex at purus fringilla luctus eu maximus dui. Ut scelerisque diam velit, in lobortis erat venenatis nec. Etiam ut sem ultricies mi commodo tincidunt vitae quis metus. Sed et lectus eu neque mattis consectetur. Quisque et libero ac orci scelerisque vehicula in sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros quis risus aliquam venenatis. In malesuada erat enim, sit amet pellentesque sem aliquam vel. Nunc id sagittis enim. Suspendisse vel elit vehicula, suscipit sem nec, viverra lacus.`,
    },
   ])
  )
 }, [])
}
