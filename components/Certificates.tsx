"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

/** Tarjeta individual con manejo de error de imagen via estado React */
function CertificateCard({
  cert,
  title,
  issuer,
  date,
  onClick,
}: {
  cert: { key: string; image: string; color: string; border: string };
  title: string;
  issuer: string;
  date: string;
  onClick: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`group relative bg-gradient-to-br ${cert.color} rounded-2xl border ${cert.border} overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-300 hover:shadow-xl shadow-md h-full`}
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {!imgError ? (
          <>
            <Image
              src={cert.image}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImgError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 gap-3">
            <Award className="w-12 h-12 text-accent-500 dark:text-accent-400 opacity-80" />
            <p className="text-sm font-semibold text-center text-primary-light dark:text-primary-dark leading-snug">
              {title}
            </p>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm text-primary-light dark:text-primary-dark line-clamp-2 mb-1">
          {title}
        </h3>
        <p className="text-xs text-accent-500 dark:text-accent-400 font-medium">
          {issuer}
        </p>
        <p className="text-xs text-secondary-light dark:text-secondary-dark mt-1">
          {date}
        </p>
      </div>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
          Ver
        </span>
      </div>
    </div>
  );
}

export default function Certificates() {
  const t = useTranslations("certificates");

  const certificates = [
    {
      key: "cert1",
      image: "/certificates/englishplatzi.png",
      color: "from-green-500/20 to-emerald-500/20",
      border: "border-green-500/30",
    },
    {
      key: "cert2",
      image: "/certificates/pythonlearn.png",
      color: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
    },
    {
      key: "cert3",
      image: "/certificates/Pythonimb.png",
      color: "from-indigo-500/20 to-blue-500/20",
      border: "border-indigo-500/30",
    },
    {
      key: "cert4",
      image: "/certificates/IotCisco.png",
      color: "from-cyan-500/20 to-teal-500/20",
      border: "border-cyan-500/30",
    },
    {
      key: "cert5",
      image: "/certificates/JsIbm.png",
      color: "from-purple-500/20 to-violet-500/20",
      border: "border-purple-500/30",
    },
    {
      key: "cert6",
      image: "/certificates/JsUdemy.png",
      color: "from-violet-500/20 to-pink-500/20",
      border: "border-violet-500/30",
    },
    {
      key: "cert7",
      image: "/certificates/Ia.png",
      color: "from-amber-500/20 to-orange-500/20",
      border: "border-amber-500/30",
    },
  ];

  const N = certificates.length; // 7
  const PREPEND = 3; // clones al inicio (últimas 3 cartas)
  const GAP = 24;
  const TRANSITION_MS = 500;
  const INTERVAL_MS = 5000;

  // Track: [últimas 3 clonadas] + [7 reales] + [primeras 3 clonadas]
  // Así el deslizamiento siempre muestra 3 cartas completas sin huecos
  const trackItems = [
    ...certificates.slice(-PREPEND).map((c, i) => ({ ...c, trackIdx: i })),
    ...certificates.map((c, i) => ({ ...c, trackIdx: PREPEND + i })),
    ...certificates
      .slice(0, PREPEND)
      .map((c, i) => ({ ...c, trackIdx: PREPEND + N + i })),
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  // Empieza en PREPEND para apuntar a la primera carta real
  const [displayIndex, setDisplayIndex] = useState(PREPEND);
  const [animated, setAnimated] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width);
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const visibleCards =
    containerWidth > 0
      ? containerWidth < 640
        ? 1
        : containerWidth < 1024
          ? 2
          : 3
      : 3;
  const totalGaps = GAP * (visibleCards - 1);
  const cardWidth =
    containerWidth > 0 ? (containerWidth - totalGaps) / visibleCards : 0;
  const step = cardWidth + GAP;
  const translateX = -displayIndex * step;

  const goToNext = useCallback(() => {
    setAnimated(true);
    setDisplayIndex((prev) => prev + 1);
  }, []);

  const goToPrev = useCallback(() => {
    setAnimated(true);
    setDisplayIndex((prev) => prev - 1);
  }, []);

  // Loop seamless: cuando entra en la zona de clones, salta al real equivalente
  useEffect(() => {
    if (displayIndex >= PREPEND + N) {
      const timer = setTimeout(() => {
        setAnimated(false);
        setDisplayIndex(PREPEND);
      }, TRANSITION_MS);
      return () => clearTimeout(timer);
    }
    if (displayIndex < PREPEND) {
      const timer = setTimeout(() => {
        setAnimated(false);
        setDisplayIndex(PREPEND + N - 1);
      }, TRANSITION_MS);
      return () => clearTimeout(timer);
    }
  }, [displayIndex, N]);

  useEffect(() => {
    if (!animated) {
      const timer = setTimeout(() => setAnimated(true), 50);
      return () => clearTimeout(timer);
    }
  }, [animated]);

  // Auto-avance cada 5 segundos
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goToNext, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [goToNext, isPaused]);

  // Índice real (0..6) de la carta en posición izquierda visible
  const realIndex = displayIndex - PREPEND;

  return (
    <section
      id="certificates"
      className="py-14 md:py-20 bg-gradient-to-b from-background-light to-surface-light dark:from-background-dark dark:to-surface-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary-light dark:text-primary-dark mb-4">
            {t("title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-secondary-light dark:text-secondary-dark text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* Carrusel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Flecha izquierda */}
          <button
            onClick={goToPrev}
            className="absolute left-0 sm:-left-5 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-lg hover:bg-accent-500/10 dark:hover:bg-accent-400/10 hover:border-accent-500 dark:hover:border-accent-400 transition-all duration-200 hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-primary-light dark:text-primary-dark" />
          </button>

          {/* Ventana visible — overflow hidden recorta el track */}
          <div ref={containerRef} className="overflow-hidden mx-10 sm:mx-7">
            {/* Track completo que se desplaza 1 carta a la vez */}
            <div
              className="flex"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(${translateX}px)`,
                transition: animated
                  ? `transform ${TRANSITION_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
                  : "none",
              }}
            >
              {trackItems.map((cert, idx) => {
                // Índice real en el array certificates (0..N-1)
                const certIndex =
                  idx < PREPEND
                    ? N - PREPEND + idx
                    : idx < PREPEND + N
                      ? idx - PREPEND
                      : idx - PREPEND - N;
                return (
                  <div
                    key={`${cert.key}-${idx}`}
                    style={{ flex: `0 0 ${cardWidth}px`, minWidth: 0 }}
                  >
                    <CertificateCard
                      cert={cert}
                      title={t(`${cert.key}.title`)}
                      issuer={t(`${cert.key}.issuer`)}
                      date={t(`${cert.key}.date`)}
                      onClick={() => setSelectedCert(certIndex)}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Flecha derecha */}
          <button
            onClick={goToNext}
            className="absolute right-0 sm:-right-5 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-lg hover:bg-accent-500/10 dark:hover:bg-accent-400/10 hover:border-accent-500 dark:hover:border-accent-400 transition-all duration-200 hover:scale-110"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 text-primary-light dark:text-primary-dark" />
          </button>
        </div>

        {/* Dots — uno por certificado real */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {certificates.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setAnimated(true);
                setDisplayIndex(PREPEND + i);
              }}
              className={`transition-all duration-300 rounded-full ${
                i === realIndex
                  ? "w-8 h-2.5 bg-gradient-to-r from-accent-500 to-purple-500"
                  : "w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-accent-500/50 dark:hover:bg-accent-400/50"
              }`}
              aria-label={`Certificado ${i + 1}`}
            />
          ))}
        </div>

        {/* Barra de progreso del temporizador */}
        {!isPaused && (
          <div className="mt-4 max-w-xs mx-auto">
            <div className="h-0.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                key={realIndex}
                className="h-full bg-gradient-to-r from-accent-500 to-purple-500 rounded-full"
                style={{
                  animation: `certProgress ${INTERVAL_MS}ms linear forwards`,
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Lightbox al hacer clic en una tarjeta */}
      {selectedCert !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Cerrar"
            >
              ✕
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={certificates[selectedCert].image}
                alt={t(`${certificates[selectedCert].key}.title`)}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h3 className="font-bold text-lg">
                {t(`${certificates[selectedCert].key}.title`)}
              </h3>
              <p className="text-sm text-gray-300">
                {t(`${certificates[selectedCert].key}.issuer`)} —{" "}
                {t(`${certificates[selectedCert].key}.date`)}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes certProgress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
