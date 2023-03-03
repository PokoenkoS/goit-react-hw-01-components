import PropTypes from 'prop-types'; 
import {StatisticsSection, StatList, Item, Label, Percentage} from './Statistic.styled'

export const Statistics =({
  title,
  data,
}) => {
  return (
    <StatisticsSection >
  {title && <h2>{title}</h2>}

  <StatList >
            {data.map(item => (
                
    <Item key={item.id}>

      <Label >{item.label}</Label>
      <Percentage >{item.percentage}</Percentage>
   
    </Item>
  
            ))}
  
  </StatList>
</StatisticsSection>
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