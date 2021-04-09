type pictureProps = {
  image: string,
  activity: string
}

const Picture: React.FC<pictureProps> = ({ image, activity }) => {
  return (
    <div className="hobby-picture">
      <img src={image} alt={activity} width='200px' height='200px' />
    </div>
  )
}

export default Picture;