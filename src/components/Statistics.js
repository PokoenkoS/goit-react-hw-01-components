import PropTypes from 'prop-types'; 


export const Statistics =({
  title,
  data,
}) => {
  return (
    <section >
  {title && <h2>{title}</h2>}

  <ul >
            {data.map(item => (
                
    <li key={item.id}>

      <span >{item.label}</span>
      <span >{item.percentage}</span>
   
    </li>
  
            ))}
  
  </ul>
</section>
  )
}

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    }),
    )
}