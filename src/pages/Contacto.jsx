import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { Power1 } from "gsap";


export default function Contacto() {

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const heroSection = document.querySelector('#hero')

    gsap.fromTo(heroSection,{scale:1.4, opacity:0,y: 100, x:100},{scale:1, y:0,delay: .2, opacity:1, x:0, duration: .8, ease: Power1.easeOut})

  }, []);

  return (
    <main className="container">
      <section className="scale-up contacto" id="hero">
          <h2>Hablemos para trabajar juntos en tu próximo proyecto</h2>
          <p>No dudes en contactarme para consultas o una charla virtual. ¡Hablemos sobre cómo puedo ayudarte a mejorar la experiencia de usuario y el diseño de tu negocio!</p>
          <ul>
            <li>
              <div className="contact-box">
                <h3 className="grey__desc">Email</h3>
                <a  href="mailto:nicolas@fullin.com.ar" className="contact-link">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                </a>
              </div>
            </li>
            <li>
              <div className="contact-box">
                <h3 className="grey__desc">Whatsapp</h3>
                <a href="https://wa.me/5491150366132" target="_blank" className="contact-link">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </a>
              </div>
            </li>
            <li>
              <div className="contact-box">
                <h3 className="grey__desc">Linkedin</h3>
                <a href="https://www.linkedin.com/in/nicolas-fullin-758bb6216/" target="_blank" className="contact-link">
                <svg  viewBox="0 0 37 36"xmlns="http://www.w3.org/2000/svg">
                  <path d="M37 2.64706V33.353C37 34.055 36.7135 34.7282 36.2031 35.2246C35.6929 35.7212 35.001 36 34.2795 36H2.72059C1.99904 36 1.30705 35.7212 0.796842 35.2246C0.286633 34.7282 0 34.055 0 33.353V2.64706C0 1.94502 0.286633 1.27173 0.796842 0.775306C1.30705 0.278886 1.99904 0 2.72059 0H34.2795C35.001 0 35.6929 0.278886 36.2031 0.775306C36.7135 1.27173 37 1.94502 37 2.64706ZM10.8824 13.7647H5.44118V30.7058H10.8824V13.7647ZM11.3721 7.94118C11.3749 7.54072 11.2967 7.14364 11.1418 6.7726C10.987 6.40156 10.7585 6.06382 10.4695 5.7787C10.1805 5.49356 9.83659 5.2666 9.45743 5.1108C9.07828 4.95498 8.67128 4.87336 8.25972 4.87058H8.16177C7.32477 4.87058 6.52205 5.1941 5.93022 5.76994C5.33838 6.34578 5.00587 7.1268 5.00587 7.94118C5.00587 8.75554 5.33838 9.53656 5.93022 10.1124C6.52205 10.6883 7.32477 11.0118 8.16177 11.0118C8.57337 11.0216 8.98294 10.9525 9.36708 10.8083C9.75121 10.664 10.1024 10.4476 10.4005 10.1713C10.6986 9.89498 10.9379 9.56424 11.1046 9.19794C11.2713 8.83164 11.3622 8.43696 11.3721 8.03648V7.94118ZM31.5587 20.4142C31.5587 15.3212 28.2287 13.3412 24.9205 13.3412C23.8375 13.2884 22.7589 13.5129 21.7928 13.9922C20.8265 14.4715 20.0064 15.189 19.4141 16.0729H19.2618V13.7647H14.1471V30.7058H19.5882V21.6952C19.5096 20.7724 19.8083 19.8567 20.4196 19.1469C21.031 18.4372 21.9054 17.9908 22.8528 17.9047H23.0596C24.79 17.9047 26.0741 18.9635 26.0741 21.6318V30.7058H31.5154L31.5587 20.4142Z" fill="#A6A6A6"/>
                </svg>
                </a>
              </div>
            </li>
            <li>
              <div className="contact-box">
                <h3 className="grey__desc">Instagram</h3>
                <a href="www.instagram.com/fullingraficos/" target="_blank" className="contact-link">
                <svg  viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                  
                  <g mask="url(#mask0_43_204)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18 0C13.1112 0 12.4992 0.0204 10.5792 0.108C8.6628 0.1956 7.3536 0.5004 6.2088 0.9456C5.0088 1.3968 3.9204 2.1048 3.0204 3.0216C2.10506 3.92056 1.39663 5.0082 0.9444 6.2088C0.5016 7.3536 0.1956 8.664 0.108 10.5804C0.0216 12.4992 0 13.11 0 18C0 22.89 0.0204 23.5008 0.108 25.4208C0.1956 27.3372 0.5004 28.6464 0.9456 29.7912C1.3968 30.9912 2.1048 32.0796 3.0216 32.9796C3.92058 33.895 5.00822 34.6034 6.2088 35.0556C7.3536 35.4996 8.6628 35.8044 10.5792 35.892C12.4992 35.9796 13.1112 36 18 36C22.8888 36 23.5008 35.9796 25.4208 35.892C27.3372 35.8044 28.6464 35.4996 29.7912 35.0544C30.9912 34.6032 32.0796 33.8952 32.9796 32.9784C33.895 32.0794 34.6034 30.9918 35.0556 29.7912C35.4996 28.6464 35.8044 27.3372 35.892 25.4208C35.9796 23.5008 36 22.8888 36 18C36 13.1112 35.9796 12.4992 35.892 10.5792C35.8044 8.6628 35.4996 7.3536 35.0544 6.2088C34.6024 5.00768 33.894 3.91958 32.9784 3.0204C32.0794 2.10506 30.9918 1.39663 29.7912 0.9444C28.6464 0.5016 27.336 0.1956 25.4196 0.108C23.5008 0.0216 22.89 0 18 0ZM18 3.2436C22.806 3.2436 23.376 3.2616 25.2744 3.348C27.0288 3.4284 27.9816 3.72 28.6164 3.9684C29.4564 4.2936 30.0564 4.6848 30.6864 5.3136C31.3164 5.9436 31.7064 6.5436 32.0316 7.3836C32.2788 8.0184 32.5716 8.9712 32.652 10.7256C32.7384 12.624 32.7564 13.194 32.7564 18C32.7564 22.806 32.7384 23.376 32.652 25.2744C32.5716 27.0288 32.28 27.9816 32.0316 28.6164C31.7436 29.3982 31.2838 30.1056 30.6864 30.6864C30.1056 31.284 29.3984 31.7436 28.6164 32.0316C27.9816 32.2788 27.0288 32.5716 25.2744 32.652C23.376 32.7384 22.8072 32.7564 18 32.7564C13.1928 32.7564 12.624 32.7384 10.7256 32.652C8.9712 32.5716 8.0184 32.28 7.3836 32.0316C6.60174 31.7436 5.8944 31.2838 5.3136 30.6864C4.71622 30.1056 4.25656 29.3982 3.9684 28.6164C3.7212 27.9816 3.4284 27.0288 3.348 25.2744C3.2616 23.376 3.2436 22.806 3.2436 18C3.2436 13.194 3.2616 12.624 3.348 10.7256C3.4284 8.9712 3.72 8.0184 3.9684 7.3836C4.2936 6.5436 4.6848 5.9436 5.3136 5.3136C5.89432 4.71606 6.6017 4.25638 7.3836 3.9684C8.0184 3.7212 8.9712 3.4284 10.7256 3.348C12.624 3.2616 13.194 3.2436 18 3.2436Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M18 24.006C17.2113 24.006 16.4303 23.8508 15.7016 23.5488C14.973 23.247 14.3109 22.8046 13.7532 22.247C13.1955 21.6892 12.7531 21.0272 12.4512 20.2984C12.1494 19.5698 11.994 18.7888 11.994 18.0001C11.994 17.2113 12.1494 16.4304 12.4512 15.7017C12.7531 14.973 13.1955 14.3109 13.7532 13.7532C14.3109 13.1955 14.973 12.7531 15.7016 12.4512C16.4303 12.1494 17.2113 11.9941 18 11.9941C19.5929 11.9941 21.1206 12.6268 22.247 13.7532C23.3732 14.8795 24.006 16.4072 24.006 18.0001C24.006 19.593 23.3732 21.1206 22.247 22.247C21.1206 23.3732 19.5929 24.006 18 24.006ZM18 8.74807C15.5463 8.74807 13.193 9.72283 11.4579 11.4579C9.72281 13.193 8.74805 15.5463 8.74805 18.0001C8.74805 20.4538 9.72281 22.8072 11.4579 24.5422C13.193 26.2774 15.5463 27.252 18 27.252C20.4538 27.252 22.8072 26.2774 24.5422 24.5422C26.2772 22.8072 27.252 20.4538 27.252 18.0001C27.252 15.5463 26.2772 13.193 24.5422 11.4579C22.8072 9.72283 20.4538 8.74807 18 8.74807ZM29.9436 8.58007C29.9436 9.16011 29.7132 9.71637 29.303 10.1265C28.893 10.5367 28.3366 10.7671 27.7566 10.7671C27.1766 10.7671 26.6204 10.5367 26.2102 10.1265C25.8 9.71637 25.5696 9.16011 25.5696 8.58007C25.5696 8.00005 25.8 7.44377 26.2102 7.03363C26.6204 6.62349 27.1766 6.39307 27.7566 6.39307C28.3366 6.39307 28.893 6.62349 29.303 7.03363C29.7132 7.44377 29.9436 8.00005 29.9436 8.58007Z" />
                  </g>
                </svg>
                </a>
              </div>
            </li>
        </ul>
      </section>
    </main>    
  )
}
