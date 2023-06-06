/* eslint-disable no-unused-vars */
import React from 'react'
import MainLayout from '../layout/MainLayout';
import * as S from './style/Styles'
import NavBar from '../layout/NavBar';
import { MdArrowBack , MdFlashOn } from "react-icons/md";


function Activities() {
  return (
      <MainLayout>
          <NavBar title="Activity" backArrow={<MdArrowBack size={18}  />} />
          <S.ScrollBar className='w-full h-[450px] overflow-y-scroll'>
              <div className='w-full h-full flex justify-center items-center'>
                  <div className='w-full backdrop-blur-lg bg-white/70 rounded-md min-h-[200px] flex flex-col justify-center items-center'>
                      <div className="h-20 w-20 bg-orange-100 rounded-full flex justify-center items-center">
                          <MdFlashOn size={32} className='text-orange-500' />
                      </div>
                      <div className='text-xl font-bold tracking-wider text-center my-2 capitalize text-black/70 w-full'>No Activity</div>
                      <div className='text-md font-semibold tracking-wider text-center capitalize text-black/70 w-full'>your activity will appear here</div>
                      

                    </div>




              </div>

          </S.ScrollBar>
    
    </MainLayout>
  )
}

export default Activities