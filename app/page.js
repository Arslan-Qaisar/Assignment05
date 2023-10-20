import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div>
      <div className='bg-slate-200'>
      <nav className={'flex justify-between p-5 pl-10 '}>
        <div className={'flex '}>
        <Image className='' src="/logo.png" width={40} height={10} alt="Picture of the author"/>
        <p className='font-semibold pt-2' >TROPIKO</p>
        </div>
        <div className='flex'>
        <ul className={'flex space-x-10 mr-10 mt-2 '}>
          <li>Home</li>
          <li>Fruits</li>
          <li>Services</li>
          <li>Contact us</li>
        </ul>
        <button className='mr-12 bg-orange-500 text-white p-2 rounded-xl'>Get a Quote</button></div>
      </nav>

      <div className='flex mt-20 m-10'>
      <div>
      <p className='text-7xl font-bold'>Welcome to <br /> Our Fruits Shop</p> <br /><br />
      <p>There are many kind of Lorem ipsum dolor sit amet consectetur adipisicing elit. Id soluta quibusdam reiciendis  <br /> necessitatibus reprehenderit unde corrupti assumenda inventore non tenetur ipsa</p>
      <button className='bg-orange-500 text-white font-semibold p-2 mt-10'>SHOP NOW</button>
      <button className='bg-black text-white font-semibold p-2 ml-4 mt-10'>CONTACT US</button>
      </div>
      <span className='ml-14'><Image className='' src="/slide-img.png" width={500} height={100} alt="Picture of the author"/></span>
      </div>
      </div>


      <p className='mt-16 font-bold text-3xl text-center'>Our services</p>
      <p className='text-center'>There are many kind of passages are available in the term of lorem ipsum</p>
      <div className='flex m-10 space-x-20'>
      <div className='border border-black text-center'>
      <span className='flex justify-center mt-3'><Image className='' src="/card-item-1.png" width={40} height={10} alt="Picture of the author"/></span>
        <p className='text-orange-400'> Orange</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempora corporis alias voluptatem, commodi tenetur, neque quidem, eos amet quae quod velit adipisci!  cupiditate porro!</p>
      </div>
      <div className='border border-black text-center'>
      <span className='flex justify-center mt-3'><Image className='' src="/card-item-2.png" width={40} height={10} alt="Picture of the author"/></span>
        <p className='text-orange-400'> Grapes</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempora corporis alias voluptatem, commodi tenetur, neque quidem, eos amet quae quod velit adipisci! cupiditate porro!</p>
      </div>
      <div className='border border-black text-center'>
      <span className='flex justify-center mt-3'><Image className='' src="/card-item-3.png" width={40} height={10} alt="Picture of the author"/></span>
        <p className='text-orange-400'> Gauva</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempora corporis alias voluptatem, commodi tenetur, neque quidem, eos amet quae quod velit adipisci! cupiditate porro!</p>
      </div>
      </div>
      <div className='justify-center flex'>
      <button className='bg-black text-white font-semibold p-2'>Read more</button></div>
      



      <p className='mt-16 font-bold text-3xl text-center'>Fresh Fruits</p>
      <p className='text-center'>There are many kind of fresh fruits variety are available</p>
       
      <div className='m-10 mt-16'>
      <div className='flex'>
        
        <span><p className='text-3xl font-semibold'>Best Fresh Oranges</p>
        <p className='pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate culpa doloribus odit in cum eveniet dolore. Corrupti aspernatur hi <br /> amet eos, doloremque recusandae optio quasi, voluptate reiciendis commodi.</p>
        <button className='mt-5 bg-black text-white font-semibold p-2'>Buy Now</button></span>
        <span className='ml-20'><Image className='ml-auto' src="/orange.png" width={250} height={300} alt="Picture of the author"/></span>
      </div>

      <div className='flex mt-20'>
        <span><p className='text-3xl font-semibold'>Best Fresh Grapes</p>
        <p className='pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate culpa doloribus odit in cum eveniet dolore. Corrupti aspernatur hi <br /> amet eos, doloremque recusandae optio quasi, voluptate reiciendis commodi.</p>
        <button className='mt-5 bg-black text-white font-semibold p-2'>Buy Now</button></span>
        <span className='ml-28'><Image className='ml-auto' src="/grapes.png" width={100} height={100} alt="Picture of the author"/></span>
      </div>


      <div className='flex mt-20'>
        <span><p className='text-3xl font-semibold'>Best Fresh Gauva</p>
        <p className='pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate culpa doloribus odit in cum eveniet dolore. Corrupti aspernatur hi <br /> amet eos, doloremque recusandae optio quasi, voluptate reiciendis commodi.</p>
        <button className='mt-5 bg-black text-white font-semibold p-2'>Buy Now</button></span>
        <span className='ml-20'><Image className='ml-auto' src="/gauva.png" width={200} height={300} alt="Picture of the author"/></span>
      </div>
      </div>


      <div className='text-center m-10'>
      <p className='mt-16 font-bold text-3xl text-center'>Testominal</p>
      <p>There are many kinds of testominals are available in this site</p>
      <span className='flex justify-center'><img src="/client.png" alt="img not found" /></span>
      <p className='text-xl font-semibold'>johnhex</p>
      <p>there are many kind of Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem neque odit, quo expedita error nulla velit quos recusandae iure laudantium autem, nobis necessitatibus. Nisi quod quia numquam nihil, vero iusto?</p>
      </div>



      <div className='mt-28 ml-24'>
      
      <div className='flex'>
      <span className='mt-24  '><p className='text-3xl font-bold'>Contact us</p>
      <input className='border-b border-black w-96 mt-5' type="text"  placeholder='Enter you name'/> <br /> 
      <input className='border-b border-black w-96 mt-3 ' type="text"  placeholder='Enter you phone number'/>  <br />
      <input className='border-b border-black w-96 mt-3' type="email"  placeholder='Enter you email'/> <br /> 
      <input className='border-b border-black w-96 mt-16' type="text"  placeholder='Enter you message'/> <br /> 
      <button className='bg-orange-500 text-white font-semibold p-2 mt-5 w-24'>send</button></span>
      <Image className='ml-auto' src="/orange-dish.png" width={250} height={100} alt="Picture of the author"/>
      </div>
      </div>
      






      <footer className='flex p-12 space-x-10 mt-32 bg-slate-100'>
        <div className='w-28'>
          <p className='font-semibold text-xl'>Fruits</p>
          <p>Oranges</p>
          <p>Grapes</p>
          <p>Gauva</p>
          <p>Lemons</p>
          <p>Watermelons</p>
        </div>
        <div>
          <p className='font-semibold text-xl'>Services</p>
          <p>Fast Delivery</p>
          <p>Fresh Food</p>
          <p>Cash on Delivery</p>
          <p>24 Hours services</p>
        </div>
        <div>
          <p className='font-semibold text-xl'>Contact Us</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
          <p>123 Main Street, City, Country</p>
        </div>
        <div>
          <p className='font-semibold text-xl'>Our Locations</p>
          <p>123 Main Street</p>
          <p>456 Elm Avenue</p>
          <p>789 Oak Lane</p>
          <p>101 Pine Road</p>
          <p>Visit us at these locations to enjoy our delicious food!</p>
        </div>
        <div>
          <p className='font-semibold text-xl pl-6'>Follow us</p>
          <div className='flex justify-between pt-3'>
          <Image className='ml-auto' src="/fb.png" width={50} height={50} alt="Picture of the author"/>
          <Image className='ml-auto' src="/instagram.png" width={50} height={50} alt="Picture of the author"/>
          <Image className='ml-auto' src="/linkedin.png" width={50} height={50} alt="Picture of the author"/>
          <Image className='ml-auto' src="/twitter.png" width={50} height={50} alt="Picture of the author"/>
          </div>
          <p className='pt-4 text-2xl pl-6'>Subscibe now</p>
          <input className='border border-black ml-6' type="text " />
          <button className='bg-orange-500 text-white font-semibold p-1 ml-3 rounded-full'>Subscribe</button>

        </div>
        
      </footer>
      <div className={'bg-orange-500 text-white text-center'}>
          <p>copyright &copy; 2023 All Rights Reserved to TROPIKO </p>
          <p>Mady with &hearts; by Arslan Qaisar </p>
        </div>








    </div>
  )
}
