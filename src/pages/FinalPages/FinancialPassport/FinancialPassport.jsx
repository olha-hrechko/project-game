import React, { useEffect } from 'react'
import { useUser } from '../../../context/UserContext.jsx';

const FinancialPassport = () => {

const [advices, setAdvices] = React.useState([])
const { user } = useUser();

  return (
    <div>
      <h2>Ton Passeport Financier</h2>
      <div>
        <img src="image-financial-passport" alt="Financial Passport" />
        

      </div>
    </div>
  )
}

export default FinancialPassport
