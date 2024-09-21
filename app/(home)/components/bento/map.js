'use client'

import mapboxgl from '!mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import React, { useRef, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

mapboxgl.accessToken = 'pk.eyJ1IjoidGhlLWNvZGVyLW8iLCJhIjoiY20wY2w3Z204MDMzdzJqczFrcGRlZ2s0YiJ9.Et-5UrXGqTDnRbxPlszckA'

export default function Map() {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(69.2401)
  const [lat, setLat] = useState(41.2995)
  const [zoom, setZoom] = useState(10)
  const [pitch, setPitch] = useState(15)

  const { resolvedTheme } = useTheme()
  let mapTheme = resolvedTheme === 'dark' ? 'night' : 'light'

  useEffect(() => {
    if (map.current) return // Only initialize the map once

    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        center: [lng, lat],
        zoom: zoom,
        pitch: pitch,
        attributionControl: false,
        style: `mapbox://styles/mapbox/${mapTheme}-v10`,
      })

      map.current.on('load', () => {
        map.current.setPadding({ left: 150 })

        const el = document.createElement('span')
        el.className = 'map-marker'

        new mapboxgl.Marker({ element: el }).setLngLat([lng, lat]).addTo(map.current)
      })
    }
  }, [lng, lat, zoom, pitch, mapTheme]) // Re-run if map settings change

  return (
    <div className="map-wrapper grid grid-cols-1">
      <div ref={mapContainer} className="map-container h-[180px] w-[250px] select-none rounded-2xl" />
    </div>
  )
}
