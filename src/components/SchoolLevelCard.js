import React from 'react'

const SchoolLevelCard = ({ text }) => {
    return (
        <div className='min-h-14 px-4 py-12 rounded-lg flex justify-around items-center bg-[#71CA00] text-2xl font-bold text-white'>
            <span>{text}</span>
            <span> <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2099 1.03505C15.7566 0.488317 16.643 0.488316 17.1898 1.03505L22.7898 6.63505C23.3365 7.18178 23.3365 8.06822 22.7898 8.61495L17.1898 14.2149C16.643 14.7617 15.7566 14.7617 15.2099 14.2149C14.6631 13.6682 14.6631 12.7818 15.2099 12.2351L18.4199 9.025H2.19981C1.42661 9.025 0.799805 8.3982 0.799805 7.625C0.799805 6.8518 1.42661 6.225 2.19981 6.225H18.4199L15.2099 3.01495C14.6631 2.46822 14.6631 1.58178 15.2099 1.03505Z" fill="white" />
            </svg>
            </span>

        </div>
    )
}

export default SchoolLevelCard