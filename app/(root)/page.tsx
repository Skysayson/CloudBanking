import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
  const loggedIn = {  firstName: 'Sky', lastName: 'Sayson', email: 'jonazjuan.dev@gmail.com'}

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox 
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {1690.50}
          />

        </header>

        RECENT TRANSACTIONS

      </div>

      <RightSidebar user = {loggedIn} transactions = {[]} banks = {[{currentBalance: 123.50}, {currentBalance: 600}]}/>
    </section>
  )
}

export default Home