'use client'

import mapboxgl from '!mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import React, { useRef, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

mapboxgl.accessToken = 'pk.eyJ1IjoidGhlLWNvZGVyLW8iLCJhIjoiY2x1bTNyZnRrMG1yMzJtb2ZoZHZmMGRmMCJ9.k7CLilNuRAr_mU7FG6fbIg'

export default function Map() {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(69.2401)
  const [lat, setLat] = useState(41.2995)
  const [zoom, setZoom] = useState(10)
  const [pitch, setPitch] = useState(15)

  const { theme, resolvedTheme } = useTheme()
  let mapTheme
  if (resolvedTheme === 'dark') {
    mapTheme = 'night'
  } else if (resolvedTheme === 'light') {
    mapTheme = 'light'
  }

  useEffect(() => {
    if (map.current) return
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      center: [lng, lat],
      zoom: zoom,
      pitch: pitch,
      attributionControl: false,
    })

    map.current.on('style.load', () => {
      map.current.setConfigProperty('basemap', 'lightPreset', mapTheme)
      map.current.setPadding({ left: 150 })

      const el = document.createElement('span')
      el.className = 'map-marker'

      new mapboxgl.Marker({ element: el }).setLngLat([lng, lat]).addTo(map.current)
    })
  })

  return <div ref={mapContainer} className="map-container h-full w-full select-none rounded-2xl" />
}
