import './style.css'
const PostItemComponent = (props) => {
    const { type, className, src, title, description, content } = props
    return (
        type === 1 ?
            <div className='wrap'>
                <div className="type1" id={className}>
                    <img src={src}></img>
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <p>{content}</p>
                </div>
                <hr style={{color:'black'}}/>
            </div> :
            type === 2 ?
                <div className="type2" id={className}>
                    <img src={src}></img>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>{content}</p>
                </div> :
                type === 3 ?
                    <div className="type3" id={className}>
                        <img src={src}></img>
                        <h5>{title}</h5>
                        <p>{description}</p>
                        <p>{content}</p>
                    </div> :
                    type === 4 ?
                        <div className='type4' id={className}>
                            <img src={src}></img>
                            <div className="book" >
                                <h1>{title}</h1>
                                <p>{description}</p>
                                <p>{content}</p>
                            </div>
                        </div> :
                        type === 5?
                        <div className="type5" id={className}>
                            <div className='book-type5'>
                            <img src={src}></img>
                            <h5>{title}</h5>
                            <p>{description}</p>
                            <p>{content}</p></div>
                        </div>:
                        <div className="detail" id={className}>
                        <h5>{title}</h5>
                        <b>{description}</b>
                        <img src={src}></img>
                        <p>{content}</p></div>
                       

    );
}

export default PostItemComponent;