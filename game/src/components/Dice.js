import React, {useEffect, useState} from 'react'
import {Button, Image, Spinner} from 'react-bootstrap'

const Dice = () => {
    const dice = [1,2,3,4,5,6]
    const [currentDice, setCurrentDice] = useState(1)
    const [diceUrl, setDiceUrl] = useState('https://i.imgur.com/8Mxx3hx.jpg')
    const [loading, setLoading] = useState(false)
    const [loadingTrue, setLoadingTrue] = useState(null)

    const rollDice = () => {
        const randomDice = Math.floor(Math.random() * dice.length) + 1
        setCurrentDice(randomDice)
        setDiceUrl(urls[randomDice - 1])
        setLoading(true)
        
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [loading])

    const urls = ['https://i.imgur.com/8Mxx3hx.jpg', 'https://i.imgur.com/r2947vE.jpg', 'https://i.imgur.com/6SNuH8s.jpg', 'https://i.imgur.com/lRd47tO.jpg', 'https://i.imgur.com/cfCvzSI.jpg', 'https://i.imgur.com/cfCvzSI.jpg', 'https://i.imgur.com/E5T7DEN.jpg']

console.log(currentDice)

  return (
    <div className='dice-container' >
        <h2>
            Dice 
        </h2>
        <Button onClick={rollDice} className='dice-button' >
            Roll the Dice
        </Button>
        <h3>{loading ? 
            <Spinner animation="border" variant="primary" />
            :
            <Image className='dice-image' src={diceUrl} >
            </Image>
        }   
        </h3>
        

    </div>
  )
}

export default Dice