import React, { useEffect } from 'react'
import { useUser } from '../../../context/UserContext.jsx';

const FinancialPasseport = () => {

const [advices, setAdvices] = React.useState([])
const { user } = useUser();
useEffect(() => {

  return (
    <div>
      <h2>Твій Фінансовий Паспорт</h2>
      <div>
        <img src="image-financial-passport" alt="Financial Passport" />
        

      </div>
    </div>
  )
}

export default FinancialPasseport
