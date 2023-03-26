export const vertical = () => `
    @keyframes growDown {
      0% {
        transform: scaleY(0);
      }
      100% {
        transform: scaleY(1);
      }
    };
    
    animation: growDown 300ms ease-in-out forwards;
    transform-origin: top left
    
    height: 100%;
    display: flex;
    flex-direction: column;
`;
