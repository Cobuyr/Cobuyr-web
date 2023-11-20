
export const Icon = ({ name, color, size }) => {
    Icon.defaultProps = {
        name: `ninja`,
        color: "hsl(335, 90%, 60%)",
        size: "50",
      }
    return (
      <svg style={{position: 'absolute'}} width={size} viewBox="0 0 1000 500" fill={color}>
        <use href={"/sprite.svg" + `#${name}`} />
      </svg>
    )
   }