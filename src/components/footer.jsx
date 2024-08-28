import React from 'react'
import SubHeader from './subHeader'

const Footer = () => {
  return (
    <div className='bg-[#F8F9FA] no-padding m-0'>
      <div>
        <SubHeader title="Newsletter Subscribe" />
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
          pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
          mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>
      </div>
    </div>
  )
}

export default Footer