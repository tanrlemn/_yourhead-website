// images
import { CloseIcon } from '@chakra-ui/icons';

export default function ContactBar({ showContactBar, setShowContactBar }) {
  const clickOutStyles = {
    display: 'block',
    backdropFilter: 'blur(2px)',
    zIndex: '102',
  };

  const sidebarStyles = {
    left: showContactBar ? '0' : '-100vw',
  };

  return (
    <div>
      {showContactBar && (
        <div
          style={clickOutStyles}
          onClick={() => setShowContactBar(false)}></div>
      )}
      <div style={sidebarStyles}>
        <div>
          <CloseIcon onClick={() => setShowContactBar(false)} />
        </div>
        <div>
          <h2>Leave a message after the beep...</h2>
          <div></div>
          <div>
            <p>Beep.</p>
          </div>
          <div></div>
        </div>
        <form>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
            />
          </div>
          <div>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              name='message'
            />
          </div>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
}
