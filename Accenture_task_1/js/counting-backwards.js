const counter = () => {
  for (let i = 100; i > 0; i--) {
    let currentNumber = 
      i % 5 === 0 && i % 3 === 0 ? 'Testing'
      : i % 5 === 0 ? 'Agile'
      : i % 3 === 0 ? 'Software'
      : i
    console.log(currentNumber)
  }
}

counter()