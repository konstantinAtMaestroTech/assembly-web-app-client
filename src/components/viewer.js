export default function Viewer({urn}) {
    const params = new URLSearchParams(window.location.search);
    const paramValue = params.get('param');
    const viewerUrl = `https://viewer-web-app.maestrotest.info/?param=${paramValue}#${urn}`; //`http://localhost:8080/?param=${paramValue}#${urn}`;
    console.log('Viewer URL: ', viewerUrl);
    
    return (
        <div className='Viewer' style={{width: '100%', height: '93vh'}}>
            <iframe src={viewerUrl} title="Viewer" style={{width: '100%', height: '100%', margin: '0', border: '0'}}>
            </iframe>
        </div>
    )
}