import React from 'react'
function ProfilePage() {

  return (
    <div  className='container p-5 col-md-4'>
    <h1>ProfilePage</h1>
    <input type="text" className="form-control m-3" id="name" placeholder=' Frist name' />
    <input type="text" className="form-control m-3" id="name" placeholder=' Last name'/>
    <input type="text" className="form-control m-3" id="name" placeholder=' Email'/>
    <input type="text" className="form-control m-3" id="name" placeholder=' Contact Number'/>


  <div>
  <div className="form-check form-check-inline m-3">
    <input className="form-check-input " type="radio" name="options" id="option1" defaultValue="option1" defaultChecked />
    <label className="form-check-label" htmlFor="option1">Male</label>
  </div>
  <div className="form-check form-check-inline m-3">
    <input className="form-check-input " type="radio" name="options" id="option2" defaultValue="option2" />
    <label className="form-check-label" htmlFor="option2">Female</label>
  </div>
</div>
    <div className="container mt-5">
      <h2>Select an Option</h2>
      
      {/* Dropdown button */}
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          
        </button>
        
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" href="#" >Option 1</a></li>
          <li><a className="dropdown-item" href="#" >Option 2</a></li>
          <li><a className="dropdown-item" href="#" >Option 3</a></li>
        </ul>
      </div>
    </div>


    </div>
  )
}

export default ProfilePage