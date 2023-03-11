import React from 'react'
import BookingCard from '../../../components/Cards/BookingCard/BookingCard'
import ProfileCard from '../../../components/Cards/ProfileCard/ProfileCard'
import SectionCard from '../../../components/Cards/SectionCard/SectionCard'
import DoubleSideLayout from '../../../template/DoubleSideLayout/DoubleSideLayout'
import style from './MyBooking.module.css'

const MyBooking = () => {
  const changeHandler = (e) => {

  }

  const updateHandler = async (e) => {
    e.preventDefault()
  }
  return (
    <DoubleSideLayout
      classLeft={'col-12 col-md-5 col-lg-4'}
      classRight={'col-12 col-md-7 col-lg-8 mt-3 mt-md-0'}
      leftside={<ProfileCard className={`d-none d-sm-flex`}/>}
    >
      <SectionCard header={true} title={"My Booking"}>
        <div className="row">
          <div className="col-12">
            <span className='fw-bold fs-3'>My Booking</span>
          </div>
        </div>
      </SectionCard>
      <BookingCard header={true}/>
    </DoubleSideLayout>

  )
}

export default MyBooking