import React from "react";

const FormikM4P2 = () => {
  return (
    <div>
      <form action="">
        <fieldset>
          <legend>ClientInfo</legend>
          <label>Name</label>
          <input type="text" name="username" />
          <label htmlFor="">Email</label>
          <input type="email" name="email" />
        </fieldset>
        <fieldset>
          <legend>Delivery method</legend>
          <label htmlFor="">
            <input type="radio" name="delivery" value="pickup" />
            Pickup
          </label>
          <label htmlFor="">
            <input type="radio" name="delivery" value="courier" />
            Courier
          </label>
          <label htmlFor="">
            <input type="radio" name="delivery" value="drone" />
            Drone
          </label>
        </fieldset>
        <fieldset>
          <legend>Dierary restrictions</legend>
          <label htmlFor="">
            <input type="checkbox" name="restrictions" value="vegan" />
            Vegan
          </label>
          <label htmlFor="">
            <input type="checkbox" name="restrictions" value="gluten-free" />
            Gluten-free
          </label>
          <label htmlFor="">
            <input type="checkbox" name="restrictions" value="nut-free" />
            Nut-free
          </label>
        </fieldset>
        <label>Prefered delivery time</label>
        <select name="delivery-time" id="">
          <option value="">Choose delivery time</option>
          <option value="morning">Morning (8:00-12:00)</option>
          <option value="afternoon">Afternoon (12:00-16:00)</option>
          <option value="evening">Evening (16:00-20:00)</option>
        </select>
        <label>Additional message</label>
        <textarea name="message" rows={4}></textarea>
        <button type="submit">Order</button>
      </form>
    </div>
  );
};

export default FormikM4P2;
