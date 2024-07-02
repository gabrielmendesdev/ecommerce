const StoreComponent: React.FC = (): React.ReactNode => {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' })

  return (
    <div
      className="container h-16 m-auto"
      style={{ backgroundColor: 'rgb(241, 122, 40)' }}
    >
      <div className="w-full h-full flex items-center uppercase text-white font-black mx-6">
        <p>{currentMonth} Gamer</p>
      </div>
    </div>
  )
}

export default StoreComponent
