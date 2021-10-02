import React from 'react'

export  function Form(props) {
  return (
    <>
      <form className="form" onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="Write City" />
        <button>Get weather</button>
      </form>
    </>
  )
}
