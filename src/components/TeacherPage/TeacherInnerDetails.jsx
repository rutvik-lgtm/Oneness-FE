import React, { useState } from 'react';
import './TeacherInnerDetails.css';
import ornamentDivider from '../../assets/Group 5.png'; 

const TeacherInnerDetails = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <div className="teacher-inner-details">
      <div className="tid-header">
        <h2 className="tid-title">ANNA VIVADIYA</h2>
        <p className="tid-subtitle">Fit Arts - Body Mobility &amp; Mechanics<br/>India</p>
        <img src={ornamentDivider} alt="divider" className="tid-divider" />
      </div>

      <div className="tid-content">
        <p>Lorem ipsum dolor sit amet consectetur. Sed imperdiet eget habitant elementum odio pharetra libero. Neque quis in sed risus vitae turpis tincidunt nunc. Tellus aenean tellus ultrices pharetra viverra. Massa ultricies a donec ipsum. Sit tempus auctor nulla ipsum eu et. Dapibus non a amet urna condimentum. Gravida posuere suscipit elementum donec eget integer. Tempus sit consectetur integer nulla vel.</p>
        
        <p>Vestibulum pretium bibendum egestas arcu tellus neque. In at leo facilisis pulvinar interdum. Imperdiet leo sed feugiat arcu massa nascetur. Interdum euismod purus penatibus nulla fames et feugiat elementum ac. Egestas nisi phasellus et et orci scelerisque diam. Sed ante egestas enim sit orci sit dui massa aliquam. Felis ante purus sed morbi gravida amet tristique sed sociis. Vitae ipsum porta nulla ultricies venenatis quis tristique id et. Laoreet urna neque ullamcorper arcu malesuada habitant <span className="tid-highlight">commodo commodo. Proin magna sed</span> pellentesque turpis posuere. Enim eros convallis odio vehicula. Phasellus arcu at justo bibendum ut nec mi. Amet consectetur faucibus sodales orci dictumst pharetra vel. Fringilla sed nec et convallis dolor turpis. Leo pellentesque justo fermentum tristique morbi nibh tellus.</p>
        
        <p>Tempor in consequat egestas non mattis viverra dictum dui. Elementum integer a morbi euismod semper lectus nam duis magna. Nibh auctor scelerisque tincidunt amet vulputate. Varius volutpat risus nulla faucibus facilisis ultrices pellentesque ullamcorper feugiat. Eu venenatis venenatis sed cras morbi suspendisse enim. Diam donec in accumsan turpis vel suspendisse. Gravida enim vitae imperdiet habitasse platea. Pharetra fringilla amet augue velit faucibus morbi. Aliquam blandit in etiam vestibulum mauris enim enim consequat. Etiam facilisi tortor et pellentesque sagittis. Nisi nisi sit nunc enim. Mauris vel vulputate risus habitant sit pretium at elementum.</p>

        <h3 className="tid-quote">"Quis amet velit porta morbi orci magnis congue faucibus egestas."</h3>

        <p>Et porta tincidunt sapien diam ante aenean mattis. Porttitor fringilla morbi ut elementum adipiscing tempus. Adipiscing eget est nunc sed. Sed donec amet vel imperdiet egestas in convallis nulla porta. Id urna fames vel urna. Quam platea tellus cras cras interdum. Molestie non id purus morbi in adipiscing risus consectetur. Lacinia orci dui sed sit risus sed nullam. Est elementum eget molestie viverra posuere convallis cursus sapien. Enim scelerisque tortor odio id commodo augue diam. Odio amet morbi faucibus tincidunt massa adipiscing in sit. Leo risus mi lectus quam. Lacinia mattis turpis vulputate non.</p>
      </div>

      <div className="tid-video-section">
        <div className="tid-video-bg">
          {!isVideoOpen ? (
            <>
              <div className="tid-video-overlay"></div>
              <div className="tid-video-content">
                <div className="tid-video-left"></div>
                <div className="tid-video-right">
                    <p className="tid-vt-live">Live Music Festival</p>
                    <h1 className="tid-vt-night">NIGHT</h1>
                    <p className="tid-vt-rock">Rock Music Event</p>
                    
                    <div className="tid-play-area">
                      <div className="tid-play-btn" onClick={() => setIsVideoOpen(true)}>
                         <div className="play-triangle"></div>
                      </div>
                      <div>
                        <p className="tid-vt-special">Special Performer</p>
                        <p className="tid-vt-names">Robert jr. | kelly Bin | St. Khleed</p>
                      </div>
                    </div>

                    <p className="tid-vt-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis vitae nulla quis egestas. Mauris eros diam, rutrum posuere velit sit amet Fusce piscing. consectetur adipiscing ipsum dolor sit amet.</p>
                    
                    <div className="tid-vt-bottom">
                      <div className="tid-vt-book">
                        <p className="tid-book-text">Book your Tickets Now</p>
                        <p className="tid-book-url">www.websitename.com</p>
                      </div>
                      <a href="https://youtu.be/sxF9qHoXf2I" target="_blank" rel="noopener noreferrer" className="tid-youtube-btn" style={{ textDecoration: 'none' }}>
                        <span>Watch on </span>
                        <svg viewBox="0 0 24 24" className="yt-logo" fill="currentColor">
                          <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M9.5,15.5v-7L16,12L9.5,15.5z"/>
                        </svg>
                      </a>
                    </div>
                </div>
              </div>
              <div className="tid-vertical-text">
                <span>W: +0123 456 7890 <span className="tid-vert-sep">|</span> TICKETS: WWW.WEBSITENAME.COM</span>
              </div>
            </>
          ) : (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}>
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/sxF9qHoXf2I?autoplay=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>

      <div className="tid-contact-bar">
        <p className="tid-contact-title">Contact Information:</p>
        <div className="tid-contact-links">
          <span><strong className="tid-highlight-orange">Youtube:</strong> <a className='link' href="https://www.youtube.com/@fitmusic">@fitmusic</a></span>
          <span className="tid-contact-separator">|</span>
          <span><strong className="tid-highlight-orange">Instagram:</strong> <a className='link' href="https://www.instagram.com/@fitmusic">@fitmusic</a></span>
          <span className="tid-contact-separator">|</span>
          <span><strong className="tid-highlight-orange">website:</strong> <a className='link' href="https://fitmusic.vcn.tv/">https://fitmusic.vcn.tv/ </a></span>
        </div>
      </div>
    </div>
  );
};

export default TeacherInnerDetails;
