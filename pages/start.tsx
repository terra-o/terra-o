/* eslint-disable react/no-unescaped-entities */
import Page from '@/components/layout/Page'
import ExternalResource from '@/components/resources/ExternalResource'
import Image from 'next/image'
import Link from 'next/link'

export default function Start() {
  const resources = [
    {
      title:
        'ARSET - Accessing and Analyzing Air Quality Data from Geostationary Satellites',
      url: 'https://appliedsciences.nasa.gov/join-mission/training/english/arset-accessing-and-analyzing-air-quality-data-geostationary',
      image:
        'https://appliedsciences.nasa.gov//sites/default/files/styles/banner_min_height/public/2022-07/Website_Header_Small_0.png?itok=lWqrXuuT'
    },
    {
      title: 'ARSET - Disaster Assessment Using Synthetic Aperture Radar',
      url: 'https://appliedsciences.nasa.gov/join-mission/training/english/arset-disaster-assessment-using-synthetic-aperture-radar',
      image:
        'https://appliedsciences.nasa.gov//sites/default/files/styles/banner_min_height/public/2022-07/Website_Header_Small_0.png?itok=lWqrXuuT'
    },
    {
      title: 'Remote Sensing Tutorials',
      url: 'https://www.nrcan.gc.ca/maps-tools-and-publications/satellite-imagery-and-air-photos/tutorial-fundamentals-remote-sensing/9309',
      image:
        'https://www.nrcan.gc.ca/sites/www.nrcan.gc.ca/files/images/earth-sciences/Fundamentals.bmp'
    }
  ]

  return (
    <Page
      title="Start"
      className="dark:bg-terra-o-black bg-terra-o-white min-h-screen"
    >
      <section className="flex flex-col items-center text-terra-o-black dark:text-terra-o-white">
        <article className="flex flex-col items-center text-center justify-center">
          <div className="my-28 flex flex-col justify-center items-center max-w-[80vw] gap-y-10">
            <h2 className=" mt-10 text-center font-sans font-semibold text-2xl lg:text-5xl 2xl:text-6xl ">
              Start your learning journey in
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terra-o-blue-50 to-terra-o-green-300">
                Earth Observations
              </span>{' '}
              - EO
            </h2>
            <p className="text-terra-o-gray-300 w-2/3 text-center">
              Never had contact with this subject before? Don't worry, here you
              will find a basic guide of what you need to know to start using
              Earth Observations.
            </p>
          </div>
          <div className="w-5/6 max-w-[80vw] text-justify flex flex-col items-start font-normal text-sm">
            <h2 className="mt-10 text-xl 2xl:text-2xl">
              1. Types of Earth Observation Imagery
            </h2>
            <p className="text-lg">1.1 PASSIVE IMAGERY</p>
            <p>
              In passive imagery systems, sensors are designed to detect
              electromagnetic emissions from constituents of the Earth&apos;s
              surface and atmosphere. These emissions can be locally produced
              (e.g. thermal radiation from vegetation in the infrared spectrum)
              or be the result of reflected sunlight in the visible spectrum.
              Hence, passive imagery is usually dependent on the day-night cycle
              and can be degraded or blocked by perturbations coming from
              unwanted sources of emissions or cloud cover.
            </p>
            <Image
              src={
                'https://business.esa.int/sites/business/files/resize/figure1-782x426.png'
              }
              alt="Passive Imagery"
              width={782}
              height={426}
              className="mt-2"
            />
            <span className="text-xs text-terra-o-gray-400 mb-4 mt-2 max-w-[80vw]">
              Figure 1: Atmospheric electromagnetic transparency (Source:
              http://commons.wikimedia.org/wiki/File:Atmospheric_electromagnetic_opacity.svg)
            </span>
            <h2 className=" mt-10 text-lg 2xl:text-xl">1.1.1 Panchromatic</h2>
            <p>
              Panchromatic images are the result of the measure of light
              intensity over a broad range of the electromagnetic spectrum.
              Collecting light from a wide range of wavelengths allows for more
              energy being collected and hence high resolution images (up to 30
              cm in resolution for the best commercially available satellite
              instruments). A standard example of panchromatic measurement will
              measure the light intensity coming from the observed scene in the
              full visible spectrum. This measurement would typically cover
              wavelengths between 0.47 and 0.83 μm. The resulting product is
              generally an image displayed as shades of grey, such as presented
              in Figure 2.
            </p>
            <Image
              className="mt-2"
              src={
                'https://business.esa.int/sites/business/files/resize/figure2-727x535.png'
              }
              alt="Panchromatic Imagery"
              width={727}
              height={535}
            />
            <span className="text-xs text-terra-o-gray-400 mb-4 mt-2 max-w-[80vw]">
              Figure 2 (Source:
              http://www.cscrs.itu.edu.tr/assets/downloads/PleiadesUserGuide.pdf)
            </span>
            <p>
              Another example of panchromatic measurement is done by thermal
              infrared sensors, at wavelengths between 10 and 12 μm. The
              intensity of the IR radiation reaching the satellite is directly
              correlated with the temperature of the object emitting that
              radiation. Regions where the ground or the ocean is warm will emit
              the most intense radiation. Because IR is constantly emitted by
              the Earth and by clouds, it is possible to obtain IR satellite
              imagery even when the scene is not illuminated by the sun. In
              contrast, visible satellite imagery which relies on sunlight
              reflected up to the satellite can only be obtained during the
              daylight hours.
            </p>
            <h2 className=" mt-10 text-lg 2xl:text-xl max-w-[80vw]">
              1.1.2 Multi-spectral
            </h2>
            <p>
              Multi-spectral imagery denotes the remote sensing of an observed
              scene in several narrow bands of the electromagnetic spectrum.
              Since the range of wavelengths contributing to the radiation
              energy detected by the sensor is reduced, multi-spectral
              instruments will typically have to collect energy on larger
              spatial extents to “fill” the imaging detector, resulting in a
              lower resolution than for panchromatic images. A common example of
              multi-spectral images is the production of “natural color” images
              by the combination of measurements in 3 bands of the visible
              spectrum (narrow bands centered around the blue, green and red
              wavelengths), in the same way as is done in classical consumer
              cameras. See Figure 3 (left-hand side) for an example of a
              "natural color" image. Multi-spectral images are not restricted to
              the visible spectrum: measurements can be done in the infrared
              (IR) fields, ultraviolet (UV), microwave, etc. Figure 3
              (right-hand side) presents an example of a "false color" image,
              combining the green band (displayed in the blue component of the
              image), the red band (displayed in the green component of the
              image) and a near infrared band (displayed in the red component of
              the image). This visualization combination allows highlighting the
              presence and health of the vegetation: healthy vegetation creates
              chlorophyll which reflects near-infrared energy, and therefore
              appears in darker red on the image.
            </p>
            <Image
              className="mt-2"
              src={
                'https://business.esa.int/sites/business/files/resize/figure3-798x278.png'
              }
              alt="Multi-spectral Imagery"
              width={798}
              height={278}
            />
            <span className="text-xs text-terra-o-gray-400 mb-4 mt-2  max-w-[80vw]">
              Figure 3: 3-band multi-spectral imagery (Source:
              http://www.cscrs.itu.edu.tr/assets/downloads/PleiadesUserGuide.pdf)
            </span>
            <p>
              Many other combinations of wavelength bands are possible,
              depending on the information to be extracted. For example:
              <ul>
                <li>
                  Shortwave infrared (red), near infrared (green), and green
                  (blue): often used to show floods or newly burned land
                </li>
                <li>
                  Blue (red), two different shortwave infrared bands (green and
                  blue): used to differentiate between snow, ice, and clouds
                </li>
                <li>
                  Blue (blue), near infrared (green), mid infrared (red): used
                  to picture on one image water depth, vegetation coverage, soil
                  moisture content, and the presence of fires
                </li>
              </ul>
            </p>
            <h2 className="mt-10 text-lg 2xl:text-xl">1.1.3 Pan-sharpened </h2>
            <p>
              Pan-sharpening is a numerical process that merges multi-spectral
              images with panchromatic images to provide high resolution
              coloured images. This technique is useful to perform image
              analysis combining the spectral resolution of multi-spectral
              images with the improved spatial resolution of panchromatic
              images. This is illustrated in Figure 4.
            </p>
            <Image
              className="mt-2"
              src={
                'https://business.esa.int/sites/business/files/resize/figure4-773x212.png'
              }
              alt={'Pan-sharpened'}
              width={773}
              height={212}
            />
            <span className="text-xs text-terra-o-gray-400 mb-4 mt-2 max-w-[80vw]">
              Figure 4: Example of Pan-Sharpening (Source:
              http://www.cscrs.itu.edu.tr/assets/downloads/PleiadesUserGuide.pdf)
            </span>
            <h2 className=" mt-10 text-lg 2xl:text-xl">1.1.4 Hyper-spectral</h2>
            <Image
              className="mt-2"
              src={'https://business.esa.int/sites/business/files/figure5.jpg'}
              alt={'Hyper Spectral'}
              width={380}
              height={230}
            />
            <span className="text-xs text-terra-o-gray-400 mb-4 mt-2  max-w-[80vw]">
              Figure 5: Example of a Hyperspectral Data Product (Source:
              http://www.hyspex.no/hyperspectral_imaging/)
            </span>
            <p>
              Hyperspectral imagery aims at obtaining a nearly-continuous
              spectrum for each pixel in the image of a scene, extending the
              benefits of multi-spectral imagery, which measures light intensity
              on a limited number of separate bands of the electromagnetic
              spectrum. Figure 5 provides an example of representation of a
              hyperspectral data product, each layer of the cube picturing the
              same 2D scene observed in one specific wavelength λ. For each
              pixel, a hyperspectral sensor acquires the light intensity for a
              large number (typically a few tens to several hundred) of
              contiguous narrow spectral bands. To every pixel in the image is
              thus attached a nearly continuous spectrum. The high spectral
              resolution of a hyperspectral imager allows for detection,
              identification and quantification of surface materials, as well as
              inferring biological and chemical processes. Hyperspectral Earth
              Observation is for now mainly limited to aerial imagery and
              scientific demonstration missions.
            </p>
            2.1.5 Microwave Radiometry The main objective of the Microwave
            Radiometer (MWR) is the measurement of the integrated atmospheric
            water vapor column and cloud liquid water content, as correction
            terms for the radar altimeter signal (see Section 2.2.3 Radar
            Altimetry). In addition, MWR measurement data are useful for the
            determination of surface emissivity and soil moisture over land, for
            surface energy budget investigations to support atmospheric studies,
            and for ice characterisation.
            <h2 className=" mt-10 text-lg 2xl:text-xl">2.2 ACTIVE IMAGERY </h2>
            In active imagery systems, instruments are composed of a transmitter
            that sends out a specific electromagnetic signal and of a sensor
            receiving the interaction of the signal with the Earth’s surface.
            Such observations are not dependent on solar illumination.
            <h2 className=" mt-10 text-lg 2xl:text-xl">
              2.2.1 Synthetic Aperture Radar{' '}
            </h2>
            <p>
              The most common active sensor used for Earth Observation is the
              Synthetic Aperture Radar (SAR). This instrument transmits
              electromagnetic pulses towards the Earth’s surface where they are
              reflected or scattered by the surface features. The instrument’s
              antenna can detect and record the return pulses. The intensity of
              the return pulse and the time it takes to arrive back at the
              antenna are used to generate SAR imagery. The main advantage of
              radar imaging is that it is insensitive to the day/night cycle and
              most of the time to the meteorological conditions (shorter
              wavelength signals such as X-band can be degraded by heavy intense
              rain cells). The selected radio band impacts what is observed from
              the scene by influencing the level at which the incident radiation
              will backscatter. Applications include (for instance) ship
              detection, oil spill detection, sea ice monitoring (see Figure 6),
              forest monitoring, soil moisture, critical infrastructure, etc.
            </p>
            <Image
              className="mt-2"
              src={
                'https://business.esa.int/sites/business/files/resize/figure6-780x505.jpg'
              }
              alt={'Syntetic Aperture Radar'}
              width={780}
              height={505}
            />
            <span className="text-xs text-terra-o-gray-400 mb-4 mt-2 max-w-[80vw]">
              Figure 6: Example of SAR imagery for monitoring formation of
              Icebergs (Source: ESA ENVISAT)
            </span>
            <p>
              By using a technique known as SAR interferometry, highly accurate
              measurements of geophysical parameters such as surface topography,
              ground deformation and subsidence and glacier movements can be
              made. In SAR interferometry, the phase of two or more complex
              radar images are compared that have been acquired from slightly
              different positions or at different times. Since the phase of each
              SAR image pixel contains range information that is accurate to a
              small fraction of the radar wavelength, it is possible to detect
              and measure path length differences with centimetric or even
              millimetric precision. With across-track interferometry the radar
              images are acquired from mutually displaced flight tracks ,
              enabling (for instance) a precise measurement of the surface
              topography. By using an external DEM, the topographic information
              can be subtracted from the interferogram, leading to a
              differential SAR interferometric measurement where subtle (mm)
              changes of the range distance between the two acquisitions (e.g.
              due to subsidence) can be detected. Further potential is possible
              by comparison of the coherence between several data acquisitions,
              which can be used for land classification and change detection.
              With along-track interferometry, the radar images are acquired
              from one and the same flight track but at different times,
              enabling (for instance) the observation of ocean surface currents.
            </p>
            <h2 className=" mt-10 text-lg 2xl:text-xl">2.2.2 Lidar</h2>
            <p>
              Lidar (Light Detection And Ranging) EO uses the same principle as
              SAR but works in the IR, visible or UV wavelengths. Lidars are
              used for precise measurement of topographic features, monitoring
              growth or decline of glaciers, profiling clouds, measuring winds,
              studying aerosols and quantifying various atmospheric components.
              The Atmospheric Lidar ATLID on ESA’s EarthCare mission will
              provide vertical profiles of aerosols and thin clouds. It operates
              at a wavelength of 355 nm and has a high-spectral resolution
              receiver and depolarisation channel.
            </p>
            <p className="my-4 text-terra-o-gray-400 max-w-[80vw]">
              More information on ATLID can be found at:
              http://download.esa.int/docs/EarthObservation/EarthCARE_instrument_factsheet.pdf.
            </p>
            <p>
              The Atmospheric Laser Doppler Lidar Instrument ALADIN on ESA’s
              Aeolus-ADM mission will measure Line-of-Sight wind profiles at
              different levels in the atmosphere from the troposphere to the
              lower stratosphere with vertical resolution of 250 m - 2 km. It
              operates at a wavelength of 355 nm, with spectrometers for
              molecular Rayleigh and aerosol/cloud Mie backscatter. ALADIN will
              be the first wind lidar in space to obtain aerosol/cloud optical
              properties (backscatter and extinction coefficients).
            </p>
            <h2 className=" mt-10 text-lg 2xl:text-xl">
              2.2.3 Radar Altimetry
            </h2>
            <p>
              Radar altimeters are active sensors that use the ranging
              capability of radar to measure the surface topography profile
              along the satellite track. They provide precise measurements of a
              satellite's height above the ocean by measuring the time interval
              between the transmission and reception of very short
              electromagnetic pulses. A variety of parameters may be inferred
              using the information from radar altimeter measurements, such as
              time-varying sea-surface height (ocean topography), the lateral
              extent of sea ice and altitude of large icebergs above sea level,
              as well as the topography of land and ice sheets, and even that of
              the sea floor. Satellite altimetry also provides information for
              mapping sea-surface wind speeds and significant wave heights.
              Jason-3 and Jason-CS (Sentinel 6) are contributing radar altimetry
              missions of the Copernicus programme, which will provide the
              continuity of critical high precision observations of ocean
              surface topography until 2030+, in full synergy with the marine
              mission of the Copernicus Sentinel 3.
            </p>
            <Image
              src={
                'https://business.esa.int/sites/business/files/Altimetry-derived%20mean%20dynamic%20topography.png'
              }
              alt={'Radar Altimetry'}
              width={400}
              height={400}
              className="mt-2"
            />
            <span className="text-xs text-terra-o-gray-400 mb-4 mt-2 max-w-[80vw]">
              Figure 7: Altimetry-derived mean dynamic topography (Source:
              http://www.esa.int/spaceinimages/Images/2005/06/Altimetry-derived_mean_dynamic_topography;
              Copyright CLS)
            </span>
            <h2 className="mt-10 text-lg 2xl:text-xl">2.2.4 GNSS-R</h2>
            <p>
              GNSS reflectometry (GNSS-R) is a relatively new category of
              satellite navigation applications which entails a method of remote
              sensing to receive and process microwave signals reflected from
              various surfaces to extract information about those surfaces. In
              this process, the GNSS satellite acts as the transmitter and an
              airplane or Low Earth Orbit (LEO) satellite as the receiving
              platform. For altimetry applications, a GNSS-R receiver can also
              be placed on the land. An advantage of GNSS-R remote sensing is
              the ubiquity of signal sources, including GPS, Galileo, GLONASS,
              and Beidou/Compass. A wide range of applications is possible such
              as wide-swath altimetry, sea-wind retrieval, and measurement of
              seawater salinity and ice-layer density, as well as humidity
              measurements over land.
            </p>
            <Image
              className="mt-2"
              src={
                'https://business.esa.int/sites/business/files/Starlab%20GNSS-R%20Sensor%20Oceanpal.png'
              }
              alt={'GNSS-R'}
              width={520}
              height={389}
            />
            <span className="text-xs text-terra-o-gray-400 mb-4 mt-2 max-w-[80vw]">
              Figure 8: Starlab GNSS-R Sensor Oceanpal for monitoring lake level
              in ESA Business Applications project INTOGENER.
            </span>
            <Link
              href={
                'https://business.esa.int/newcomers-earth-observation-guide#ref_1'
              }
            >
              <a className=" underline mt-10 mb-20 text-terra-o-terra dark:text-terra-o-gray-200">
                Content taken from Newcomers Earth Observation Guide
              </a>
            </Link>
            <h2 className="text-2xl mt-10">
              How Earth observations can help in different scenarios - some
              examples
            </h2>
            <h3 className="mt-10 text-lg">Agriculture</h3>
            <p className="text-terra-o-terra dark:text-terra-o-gray-200">
              Agriculture plays a dominant role in economies of both developed
              and undeveloped countries. Whether agriculture represents a
              substantial trading industry for an economically strong country or
              simply sustenance for a hungry, overpopulated one, it plays a
              significant role in almost every nation. The production of food is
              important to everyone and producing food in a cost-effective
              manner is the goal of every farmer, large-scale farm manager and
              regional agricultural agency. A farmer needs to be informed to be
              efficient, and that includes having the knowledge and information
              products to forge a viable strategy for farming operations. These
              tools will help him understand the health of his crop, extent of
              infestation or stress damage, or potential yield and soil
              conditions. Commodity brokers are also very interested in how well
              farms are producing, as yield (both quantity and quality)
              estimates for all products control price and worldwide trading.
            </p>
            <h3 className="mt-10 text-lg">Forestry</h3>
            <p className="text-terra-o-terra dark:text-terra-o-gray-200">
              Monitoring the health of forests is crucial for sustainability and
              conservation issues. Depletion of key species such as mangrove in
              environmentally sensitive coastline areas, removal of key support
              or shade trees from a potential crop tree, or disappearance of a
              large biota acting as a CO2 reservoir all affect humans and
              society in a negative way, and more effort is being made to
              monitor and enforce regulations and plans to protect these areas.
              <br />
              International and domestic forestry applications where remote
              sensing can be utilized include sustainable development,
              biodiversity, land title and tenure (cadastre), monitoring
              deforestation, reforestation monitoring and managing, commercial
              logging operations, shoreline and watershed protection,
              biophysical monitoring (wildlife habitat assessment), and other
              environmental concerns.
            </p>
            <h3 className="mt-10 text-lg">Land Cover / Biomass Mapping</h3>
            <p className="text-terra-o-terra dark:text-terra-o-gray-200">
              Regional land cover mapping is performed by almost anyone who is
              interested in obtaining an inventory of land resources, to be used
              as a baseline map for future monitoring and land management.
              Programs are conducted around the world to observe regional crop
              conditions as well as investigating climatic change on a regional
              level through biome monitoring. Biomass mapping provides
              quantifiable estimates of vegetation cover, and biophysical
              information such as leaf area index (LAI), net primary
              productivity (NPP) and total biomass accumulations (TBA)
              measurements - important parameters for measuring the health of
              our forests, for example.
            </p>
            <Link
              href={
                'https://www.nrcan.gc.ca/maps-tools-and-publications/satellite-imagery-and-air-photos/tutorial-fundamentals-remote-sensing/9309'
              }
            >
              <a className=" underline mt-20 text-terra-o-terra dark:text-terra-o-gray-200">
                Content taken from Remote Sensing Tutorials
              </a>
            </Link>
          </div>
          <div className="flex mx-6 my-20 items-start justify-center flex-col">
            <p>Recommended resources</p>

            <div className="flex items-center justify-center sm:flex-row flex-col gap-2">
              {resources.map(({ title, url, image }) => (
                <ExternalResource
                  key={title}
                  title={title}
                  url={url}
                  image={image}
                />
              ))}
            </div>
          </div>
        </article>
      </section>
    </Page>
  )
}
