// const style


const Gallery = () => (
    <div style={{ display: 'block', width: '95%', margin: '0 auto', backgroundColor: 'green' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
            <div>
                {/*<Link href='/GalleryDetail'>*/}
                    img 1
                {/*</Link>*/}
            </div>
            <div>
                img 2
            </div>
            <div>
                img 3
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
            <div>
                img 4
            </div>
            <div>
                img 5
            </div>
            <div>
                img 6
            </div>
        </div>
    </div>
)

export default Gallery;
