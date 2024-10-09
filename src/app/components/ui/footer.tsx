
export default function Footer
() {
    const footerData = [
        {
          title: "About Us",
          subtitle: ["Our Story", "Team", "Careers", "Privacy Policy"],
        },
        {
          title: "Services",
          subtitle: ["Web Development", "Mobile Development", "SEO", "Marketing"],
        },
        {
          title: "Contact Us",
          subtitle: ["Email: musyafaachmaad.com", "Phone: +123 456 7890"],
        },
        {
          title: "Follow Us",
          subtitle: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
        },
      ];
  return (
    <div className='w-full h-auto py-5 border-t border-neutral-800 bg-neutral-900 bg-opacity-60 z-20 flex justify-around  items-center '>
        <div className='flex h-full w-3/4 justify-between  items-center'>
        {footerData.map((data,index) =>
            <div key={index} className='py-3 h-full flex flex-col justify-start my-auto'>
                <h1 className='text-center'>{data.title}</h1>
                <ul  className=' flex flex-col gap-2 text-center '>
                    {data.subtitle.map((item,subindex) =>(
                        
                        <li key={subindex} className='w-full flex flex-col justify-between ' style={{fontSize: '12px'}}>
                            <a href="" className=''>{item}</a>
                        </li>
                    ))}
                    
                </ul>
            </div>
        )}
        </div>
    
    </div>
  )
}
