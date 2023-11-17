import React from 'react';
import './Filter.css';

export default function Filter(prop) {
    const data = prop.catvalue;
    const categry = [...new Set(data.map((val) => val.category))];
    const years=[...new Set(data.map((val)=>val.year))];

    

    function filtervalue(event){
        prop.filtervalueselected(event.target.value)
    }
    function filtervalueDate(event){
        prop.filtervalueselectedDate(event.target.value);
    }

    return (
        <div className='filter-container'>
            <div className="filter-main">
                <div className="filter-category">
                    <label htmlFor="category">Select Category :</label>
                    <select name="category" id="category" placeholder='Select Category' onChange={filtervalue}>
                        <option value="null">None</option>
                        {
                            categry.map((v, index) => (
                                <option key={index} className='category-option'>{v}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="filter-years">
                    <label htmlFor="Years">Select Year :</label>
                    <select name="Year" id="Year" onChange={filtervalueDate}>
                        <option value="null">None</option>
                        {
                            years.map((v, index) => (
                                <option key={index} className='category-option'>{v}</option>
                            ))
                        }
                    </select>

                </div>
            </div>
        </div>
    );
}
