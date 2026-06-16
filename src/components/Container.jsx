const Container = ({ children ,className = "" }) => {
    return (
        <div className={`max-w-7xl  mx-auto px-4 md:px-12 lg:px-20 ${className}`}>
            {children}
        </div>
    )
}

export default Container