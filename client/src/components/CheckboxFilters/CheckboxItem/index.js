import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const CheckboxItem = ({type, id, name, checked, onChange}) => {
  return (
    <>
      <div className='checkbox-group__item'>
        <input className='item-filter' data-type={type} type="checkbox" id={id} name={name}
               checked={checked}
               onChange={onChange}/>
        <label className='checkbox-label' htmlFor={id}>{name}</label>
      </div>
    </>
  )
}
export default CheckboxItem;

CheckboxItem.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
}