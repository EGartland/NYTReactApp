import React from "react";

const SearchForm = props => (
  <form>

 
      <div className="form-group">
        <label htmlFor="search">Topic</label>
        <input
          onChange={props.setTopic}
          name="search"
          type="text"
          className="form-control"
          placeholder="President Obama"
          id="search"
        />      <br />

         <label htmlFor="search">Start Year</label>
        <input
          onChange={props.setStartYear}
          name="startYear"
          type="text"
          className="form-control"
          placeholder="1901"
          id="startYear"
        />      <br />

         <label htmlFor="search">End Year</label>
        <input
          onChange={props.setEndYear}
          name="endYear"
          type="text"
          className="form-control"
          placeholder="2018"
          id="endYear"
        />
        <br />      <br />

        <button
          onClick={props.handleFormSubmit}
          className="btn btn-sm btn-outline-primary"
        >
          Search
      </button>
        <button
        
          onClick={props.viewSaved}
          className="btn btn-sm btn-outline-primary"
          style = {{margin:10}}
        >
          View Saved
      </button>
      </div>

    <div className='col-md-3'></div>

  </form >
);

export default SearchForm;
