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
    pets
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
    pet
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
          gender: 'male',
          mail: 'davidemadrigal@gmail.com',
          name: 'Scary Terry',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 1,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog02.jpg',
          type: 'dog',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Poppy',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 2,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog03.jpg',
          type: 'dog',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Molly',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 3,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog04.jpg',
          type: 'dog',
          gender: '',
          mail: 'davidemadrigal@gmail.com',
          name: 'Bella',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 4,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog05.jpg',
          type: 'dog',
          gender: 'male',
          mail: 'davidemadrigal@gmail.com',
          name: 'Alfie',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 5,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog06.jpg',
          type: 'dog',
          gender: 'male',
          mail: 'davidemadrigal@gmail.com',
          name: 'Charlie',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 6,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog07.jpg',
          type: 'dog',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Daisy',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 7,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog08.jpg',
          type: 'dog',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Rosie',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 8,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog09.jpg',
          type: 'dog',
          gender: 'male',
          mail: 'davidemadrigal@gmail.com',
          name: 'Teddy',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 9,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog10.jpg',
          type: 'dog',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Lola',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 10,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog11.jpg',
          type: 'dog',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Millie',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 11,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog12.jpg',
          type: 'dog',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Robert',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 12,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat01.jpg',
          type: 'cat',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Frida',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 13,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat02.jpg',
          type: 'cat',
          gender: 'male',
          mail: 'davidemadrigal@gmail.com',
          name: 'Tiger',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 14,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat03.jpg',
          type: 'cat',
          gender: 'male',
          mail: 'davidemadrigal@gmail.com',
          name: 'Tigger',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 15,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat04.jpg',
          type: 'cat',
          gender: 'male',
          mail: 'davidemadrigal@gmail.com',
          name: 'Max',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 16,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat05.jpg',
          type: 'cat',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Smokey',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 17,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat06.jpg',
          type: 'cat',
          gender: 'male',
          mail: 'davidemadrigal@gmail.com',
          name: 'Sam',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 18,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat07.jpg',
          type: 'cat',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Kitty',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 19,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat08.jpg',
          type: 'cat',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Sassy',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 20,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat09.jpg',
          type: 'cat',
          gender: 'male',
          mail: 'davidemadrigal@gmail.com',
          name: 'Shadow',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 21,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog13.jpg',
          type: 'dog',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Cookie',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 22,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog14.jpg',
          type: 'dog',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Charlie',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 23,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog15.jpg',
          type: 'dog',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Max',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 24,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/dog16.jpg',
          type: 'dog',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Buddy',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 25,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat10.jpg',
          type: 'cat',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Buddy',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 26,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat11.jpg',
          type: 'cat',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Buddy',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 27,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat12.jpg',
          type: 'cat',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Buddy',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 28,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat13.jpg',
          type: 'cat',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Buddy',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 29,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat14.jpg',
          type: 'cat',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Buddy',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 30,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat15.jpg',
          type: 'cat',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Buddy',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        },
        {
          id: 31,
          picture: 'https://adoption-app-bucket.s3.amazonaws.com/cat16.jpg',
          type: 'cat',
          gender: 'female',
          mail: 'davidemadrigal@gmail.com',
          name: 'Buddy',
          info: `This is a text paragraph to see how big it can be before causing an overflow in the card... seems `
        }
      ])
    )
  }, [])
}
