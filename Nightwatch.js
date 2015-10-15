module.exports = {
  src_folders: ['./tests'],
  output_folder: './results',
  custom_assertions_path: '',
  globals_path: './globals.json',
  live_output: true,

  selenium: {
    start_process: true,
    server_path: './node_modules/selenium-server/lib/runner/selenium-server-standalone-2.38.0.jar',
    log_path: './results',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': './node_modules/.bin/chromedriver',
      'webdriver.ie.driver': './node_modules/dalek-browser-ie/lib/bin/IEDriverServer.exe'
    }
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_host: '127.0.0.1',
      selenium_port: 4444,
      silent: false,
      disable_colors: false,
      screenshots: {
        enabled: true,
        path: './results/screenshots'
      },
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        chromeOptions: {
          binary: '/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary',
          extensions: ['Q3IyNAIAAAAmAQAAAAEAADCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAK0qgu30kmV+K1yUfSTK74vmCicOeQbWSDlHBYcTJkL6jXiBhMCI0KlfK4aY07X/knhZTya8pOBrjOIDKGxiCDl+dA9GeUKJTrr+Fai8L9+bELpN3irhl4gXhbWEcUxGpvuMPPYWpwzl7rty8gQsHdLuOU/CCvZzUJHBqpGkJe2izm0gEZF3+moxUtdCbylQDxj2K6on6FoG9t2HjTCnACXcOth05fz0BqV5STK1oFTiwZ0TLvl93dd08MRib6P3kxEh0ra6DUGtlCFeU58cFW/A2FYR6vGVDvmT5A3F/2T7yC0R59FrvNtw3hxQ5la7Qs/7gXoeuYLyJC/L2NVW9OcCAwEAASEcN+mMQ0WCA9QdqBLpDq+DJqlsa8bobPU/4yMdsQSxQGtqnXD8N3bCNaoIzU2LuNB73SgldGYHnVTu7uQwxwneQ//3Fm4A0ZfpcTtpFUnUMpKvUkvfdmJIsUBZK25jKvTD49CY9nNYXei5YrOekAq6eF1FXB+E7twIvn6oIfShMG2oKHwSyBxI4x1WZPTR/hR6GqCU7ZYNyCGX+UKY0flAwzmiuDXBs4bOuPqxNfGVfbCItqOinEzN65swAG94sBk8yov6FcgykTkIglkq4CEybEQR8rhKy10y5dxx0rrLSF9V0amQEicKzgnfwP5kpYQKh+Cqtj7zzRTQPfb45LBQSwMEFAAACAgAM2xNR8ffUtPnAQAAlwQAAA0AAABiYWNrZ3JvdW5kLmpzdVNNb9swDL37V3CX2sEM955ghy5pi2KbE6QJsNugSEyizZU6SW6Hrf7voyJ/yEHqiy3qPfLxkU5ri2CdkdylsyTZ14o7qRXsalmJm+8bg5g5tnsQE/iXABh0tVGg8BVWRj9Ji1lHyQxaXb1gTqCfyF0gAMg9xBn8w4/ExYLVTj8xzy0O6IZSOQw5tXalFjhwQ8IPly6grZylpYYO0EpGAXsq+n5p2GsD7oiwYTt4le4IDwtI4SME7bNRFZ9xiDT9V4UOnE/2CTLvUWtgL3ZS+NuB2VqWxT2wPx4zhYXmd4Ydtk5WtrBoJKvkX3KILidD6V5Y99UAVjTSLmPkyKkReDb6RQoURdoRkkBukqQ1x9TKSXpr9Q2tZQeyS4iv0jpUaDKCRyP/XaN1OVhUAk14r9E+a2X70XhTpCBLWnQRhLy9QRZoPgBXVzCcCtk57octo9WxNBp+hK5yYXVt+GgLOKP2H5fb9fz2x2q52q6mkbk0XG+mEhtNafPR8lDyU7LpiJ2PEOzU97RvJZwjSDPalJ1B9mt2Udp8WW5uy00sLv7nqOeCtlFlo/LX1/BYc05TGYX7eQjm2OSsKQAfbZVGUwiB2SVs8IGwrdbPN/Mv9+vltlycw8/9PAkYg5ro9L45zbCLCaH+A1BLAwQUAAAICACckUhHMZUEft0AAACVAQAADAAAAGNvbnN0YW50cy5qc2WQsU7DMBRF935FtkwMmRGDmz5VEcS2HAfRyXLDUxVBbMt2EPw9dlJBCfO5716dV84BixD9OMTyfrcbrAmxgBepKGmheChK7c/Wo66qr8RXTMSeCSBVdVI1o5I0FIRqDn/Tdykb9WjQ/9x1rBc1KE6OS7PTF9yy3AdUZpzv0cRtYk/qx6NgPV32znp4u3g7m9d/K4z3fJmxbnZbmgwzw880EUZrft1q2TCqCOewLmjn8Kb9ygW07Hmx8DjZD9zyFrruqjlhCLem6XOHk+okkVm35U8gYfWd3DvGHPwGUEsDBBQAAAgIALaSSEdjnDxdtAQAALQMAAAKAAAAY29udGVudC5qc4VXS3PiOBC+8ys0cxiTLcaTXKFycMCbSu3wKCC7mRMlrIZox1isJJMwM/z3bUm2bGOS4QB6dH/d6v66JYJcAVFa8kQHg05nk2eJ5iIjIotfNWQKx2NQim6hK0HtRabgivzsEKJeuE6eiV8NqVV0m4QkFHGj4fJhOllFs1k8GfXt+gVFJXKZQKnolRfTx/kwXs2ms8dZ328RIuG/HJS+hyx6WkqAlgeDmvBaAv0+uAh8Fw3/up9PHyvPzIfu95CxFvKrxvnbyKdOa7EegHk8nv4dl2Yk7MQBChMe8w3VcbxYRPded+dy8Rv/PNapc2rkdIa6ZTrhAJl2Uf/yhUyz9EhoksBel0YU2UixI/oZCOzWwBjPtmSPGyGq8A1xCEX6yIfbW/LCMyZeykxK0LnMnBv4lYImjGpKbolTtJNfv8jP06BTIFo9sx5CyT5yi8Dx03I1icYx+fSpEikMm/2SKxgp3C8dKJlmpZv0fI+g74T/Avvq4BU/Gux4mwpvkaEBcGolsuVE/XAmjkwk+c7EGFHYcaGpdnGax9Ho22qxjJbxajgdz77Gy7gMyfYczWaOQIrOOwmPShmLTQq/coVZAtkNRtPxUGTarAnKgAU9UnrbrWJ+0UQD2YWjCe61CvHTVZvaLWRrM8Hi8HRG3jk/nES/+O05qlgu9UsiDaeTZTxZGjMDVx/DFGhG8j2h2ZFET4RnG4Fftjrw8KYkmqkMcSdzhEb1RY6lpVRo5xcigyL/UK7JRsgSkmiBkDTFutxi6XCtIN1gSYJCYGDoS1gou7ILFegl34HIdfeCBWtjDuucp8yaMB0j9JvJM9Y6hDLPNGIgVsbKRlHEzyfr1CPXVxU1cVjPRKOB0lebN8/LD/UFgm5I8UIyeCGxlAJpNBHEaZK9FAeORLIRcZjYfsKgMFzvLa61OOQ/Jd1iokciMaNHzVMVMlAgOU35D+/QwCsZ1lKONEMtz8IE464hTsHMugHjB2e3Jm6iHWm8N9e5hm7ADeOj+d0UK+zm5pslUPQwieerh9FvVJU+poDaASYuxf0+udm/IiFTzvCYbECK9c9is0HNPvmM+wNsxLYho/S1me6o3PLMzcj1oO2vi+HwGdPfrWJlxfy514IdzwQ9wFmam2S3+XQ5semcIZm4goqHyFqRHqCHQv9CoksCvJMD5HyRgLvjA+u+F1vHrbqvF+tql2MfRGeUqaxE7PZo3VeA8USskSgH64Y5xLiQnxbL1Wk8Ur28/GKIxmKaPLfl6+LE+tQ1djPBgIgNiaSkxxCZr4U+7rEIU55AmGAL8AhFg2QTVFFXTTwXBgtmev3FeFTXjs2HlW48a8ynjEPIuMIWmmHCui2hs5dV2Q3a41PVOPzInBqRN3zru7L50LIqVJ9sKF48vVp/Qj6aK6GPjStvbFCJnRzkCC/iQq20V5rzByoG3Qbje4Ur7dvI1oOL+KV6qM5ZuySr2NYkTmfV03zG1Zti0cv3Qumy/zpc/yDq+9fQxasLN3uNay4ojAXFsn0q9ot+2bHtPPgjsA5itcT2pYd91zz0/Esw7BR+tW7+j4XIx17zedlzmUBYBL2jyfetFHnGaohnN47/n2FsePj23xBE/B9QSwMEFAAACAgAM2xNRwAAAAACAAAAAAAAAAQAAABsaWIvAwBQSwMEFAAACAgAU1lNR9OePYpXAQAA+AIAAA0AAABtYW5pZmVzdC5qc29uhZJBasMwEEX3PoXQJpvWSbpsSyFQeoCSQqAEI8vjRKlsGY2UEkLu3pHs2G7S0I1l3mc0f/7omDDGa1EBf2R8YXNjQcznB34X+B4sKlMHaZbO0nlLC0BpVeM65R2cVbAHZIIVRvoKajdBtlixpQVI25pcyK+NNb4uqORIhFh7CxL4jICQNDU6UTtMdxgLI9Uqn74a+WbF5sMpfS0uRX4NF6vYf4wHFwFHum5F3oRR0ZF38uOsB8KnaJ08BZxd2j2eb62Ek1sYz0HwWWideavxhXdw3dsIUmkpc+x69cru4pY/8/gnkRuZDJP0s5OneJ6Szh3PrflGsJmQ3Xa7VRVQCq9d1pjGN2Hp8Wcav+nWVZr3cVGQlcLwbIZZxml0eTuyx/u+wjtDMbY9z4lQsLUqAV02vMOH3ysB6a1yB/KllTwEY+2W7tFKNkHQ5eSJmXwHcox4ckp+AFBLAwQUAAAICADQfUdHAAAAAAIAAAAAAAAABgAAAHBvcHVwLwMAUEsDBBQAAAgIAAB6R0dY/8+ZRQAAAEUAAAAJAAAAUkVBRE1FLm1kU1ZILErKL0pNNDSs5HLOKMrPTVVIrShJzSvOzM9TKMlILFEoyywuTczJrEotBvJTFRyTk1OLizOTMnMySyoVQopSU7kAUEsDBBQAAAgIAIWDSEc5EtZizQAAAKkBAAAQAAAAcG9wdXAvcG9wdXAuaHRtbI2RQYvCMBCF7/srZnO3wZuHtNBd9SQo0gX3mKSjjaRNSaaC/97Y6EEU9DSP977HTIj4nq9/q//NAhpqbfEl0gAQDcr6KqJskSToRvqAlLOB9pMZu0VkyGJReuU8yun0DKUm47ogeEoSFbQ3PUHwOmdZxnUESHYUsmNgheApfs1ao3gl1afo3Omll4c/MvZtpXf90D9Bgt9fLpSrz7eeGohcB6bOmXWyLneVR/wZTVasogPlDq6e4Al97nls3Qkfm9vRe9WNetwezxl/5AJQSwMEFAAACAgAnIJIRxwvLXxIAQAAxQMAAA4AAABwb3B1cC9wb3B1cC5qc5WRTWvCQBCG7/kVc8sGJN6VHjTmIFQT/Ci9ybo7amjchf0QSvG/d9dGm5hQ7UDIzsz75l3yhFYjaKMKZsJhEHDJ7BGFiSnn6ckdXgttUKAi4SSbJVIYP5OUIw97sLOCmUIKIBF8BQBXtzsCxHs0aYm+H39OOQlLZxu9rxTi2BojRRj96NpRrCzYR8f3fZVoYHvxwwug98WGKpc1rAQrutU+O7FKuS2JYnNAQaotQL8PS8sYah3fZtcgYuh2KnbyN84XOyh5xFhZYQr31ij4zNnpHklNBQ2PLy2tYjiAZbZeJOkmz/J13rvT0EvuAEbJaprNN6M8T+eTe5G/FR9Adbm44I39udZFw+B+XI3O7nfSUmPVNlB1wFJ4lCfswPVvYE8gewytG9sjcM+ja8N7Dl8L4CKdZW9pW/Y3wibEBsb66jauwTy75xtQSwMEFAAACAgAM2xNRxHqof6HBgAAoCEAAA0AAABsaWIvQVhUcmVlLmpz3Vpbb9s2FH7Pr2D9UNlo4KDXB3fe0DRrV6BdgsBrB2zDQEm0xIUiVYq0E6z57zuULMuSD2OtWvqwh6IWv8Nz5zm8JLAFI4XRPDLBy6OjSNCiIK9+XWjGyN9HhERKAmojo/RYK2V+VjGblAghJuXFtB4kc1L/fNmgxvGZbxhOQ8tF7H6NW1MnbsIt/CsMNTwiDRm1RmUwpqSjOyYqN3/mVDNpmm8uY/iudVpRTS6VYIub3AmOUq0yNm34TGsQjHX0fEnGD9psycOHpC0YNBWMPJhvOZeqf2LhK83opOTj7NVqTQKpSMWKSMeLyhh+GLIzIdiIdqruSJ13rdvwBR1LCzcEm48vX0gQNCSy4iCtEBvuS6XJuBShVc60uQE2HbNqn1WqrKiwjkeb5rd6+h8vN7TOYwZ8oJb1lPmcBEsrIzcnmGx1gtQxXFq2O7GZYcGOJZcs9k24bbxEQSPIizlZUlHUkSvW3EQpGSOhqg2LKCQ3FrPZUcttsYpsBl6dRoAZdrb5fKNp4v4fT2oTQsCvNvLbzENrjJI1363CsHS29m+ENRGe0jxnMn6dQrqPOzr8KFgpelQxHk0mu27s2Cwp5Dis4Ww8Ad+S0QhJ4ZgVkea5+74brRk9cIwmrQy7S+EFuy6N6uq2w7mxgUEYB3N2Vk96hEZweTUbFAO64/5S21Sz5d5SmVpdL77/R5Rql2JOjZgQw5xq4lGf6EUpi65O1fU9LC0uc2u6oTVV4xiVckN1PWqh5SiL92PvWtcWPmxVDNQzz/iCZyhmtuNf7XLg0MvpMV8NkwQMegla8iSiZdoNk9fw6SvW6oHOrHj0EpcyGnOZ1PI8nSvlTFMdpTyi4j1bMdH055Ld41lrmf97jdPHO9pu9d2R8GSwhCcHJDwdLOHpAQnPBkt4dkDC88ESnh+Q8KKWAFskaoUZLPCFX+DtwezlGU3YfZTfLOkW30I71qN2zaXC7Ndb10yr5kd+QLEZ0p33SWFwWuSCm3FwEkymucqhp85I8F1AHnVpU5OJBU0ACL4PDi/6srssdmr2t+pcZZXfBfCdfTXcZ/tUmEGVEndjv51bYd4Zlg0r1IL3KtJO2Aeqr5jGA0ZOTghPpNKMOFKSlbQFoQUc/Rix4kQJsuZCwEGrgBOTG80OSgVbaKJpng6zMe9lYj605+U9G56GfqdO7+tIdGf2l6LvZ9MG5/ufoJPXCdLZpyphM7mLf/UuLe3nY7UeKEf3klMIHvvWxH2GUSasHcaMy/0QwuBHV8feKH3pprRn0GtkBr32z7irVHYnQD1YnJ+dz6prEAMnq8O+LC+43CHsv/On70hXatUnwIaGYujBwrHolU3OTW84E/E374ogeNQ71ntH4H1LqIAif8apUAlWD0oYBaRUhjZHng6aw24k8sMa8kegx8MQGOOlKRQquvpsFX7kDG1x807GTqjCp5d1/Eyr/EytUa0iKle0wJHcZ0okOETNU0qV/rS9YMDqLI5kodreFOxheZUmVN/gBNIA+k4uFXoud3eV3GfKzu3Je9ganDFDOap8h7AHyYLpzEN2ZVSOQ048Go7Ym64x18xd8qPOiXkRCVXAcXehOZRAPAHrZYlhLAtZHLP4PPwLxGAUSwX5iebfUuEuSDSP8XFlUcfwpab41UqFXGhWuAxxvqdo/Kr9Hyq1PCV9oPn77W0jjqOYFFyWhdyTvoKGTDRtowOyBEojigDXU1fBcLBw4s69C3RDgEKqKlGnFI2YJ8cyylFBbiftGf9sGRowqNcpOs6k9ShVQjtb0n20OWrg2OvWVSROc+m2nz4Ct6D9/q4pLlSO568jwMc9K0fSFU+8vUR6GoKyxiUOBuXUM67yX3K/c/ODCyvXKgGi4s5GVG7t3/pWt2aJx1BtQ7SsaStwvxWr5BLKEQpFWgnRvCFhqCcBC0YzATa23qD2SHSEJnaFeJKv2qIvUpuFKJxzWQXnguJ7koYCRwU3nhRzO1qL9prqlhO9yKahN4qA+TojQBeQf2j+AOYZFqw6k72GBg/1B7fCXZl4ACOYJ55GJdAJ/W4zSonQM1Uz9tbTvhzmq0QOw8atvJKevZnTwnDU12t/IgL0kbM1CnEZDz16tp8Hqqs/Zl4ZoznsNtk4cK+4wTH2DN89Y7ift81bfnWcqB/ENDNWy+6LeOR0I2rZZV+Ogx3Nvfve3y2UJMelxsf1u/wjMiJk1Lamz3lt9HvzWFHdwlbqlhyqP4m4PfoHUEsDBBQAAAgIACeCSEetE8OO8QAAAOkBAAATAAAAbGliL0RvY0ZyYWdVdGlscy5qc5VQO07EMBDtc4rp4jS+wIpixYIogIblAJY9AUuDHY0nKy0od8d2nIUVFZ3H7zNvXj8nhCTsrfS7rrNkUoJDtPds3l7FU4KvDjLBiLeQkL0h/4lqzPBQIYCTYXD+BDfgop0/MIi2jEbwjrBMqs9oP+wqOT+1mSYM7vbdk6tG2lIM+BwdKuEZh0ZllJlDVfgQkB+OT48FWX4CObyO9CK8pSKU/6W67MiS5pUL2azKz1+vQxtLW9W0+RUFrntSVu2ZzVlPHCXKeUKdyFvU1hCpstmWJsr5qcnHyKBWD4jjxWk7DWqaqxqRmnT5XV2hrY0t3TdQSwMEFAAACAgAKYJIR8LRrhfEAQAAHAYAAAsAAABsaWIvVGFicy5qc71Uy07DMBC89yv2FiNVEedWHBASUg+gSlTiUPXgJpvWyLWLvWlBNP+OnVedJpWAA5c8dsbr2RknUW4RLBmRUDQdjRLJrYUFX1v4GoEDOIkENkjspiwAGKTcKFB4hLnRO2GRZblKSGjFDFotDzh2pDdMqFkCkGwdFWNyfeP3HM0naxCH5cagolehUn2cAJkca6wYQ9MamF97bgggsn7NqysVVMi0BQpA6ebsMr1EFj3ralx+4ELytcQ4Chc2UupadS861jxUA/yrQ+MW5K7xAX/v2/J2dd06D/7UvVqdd/GvJlpU6UIzkY4h5cQbXaEnnvKE1vINnnmDbZo4wk4+4TiMKqYtKlbratNxO81UpkNfrmmoqXFHy3nYYWn3Ug7KavSEQoLQMm2ASSRwZdAZXEZ6TWOQl8O81KASpgnlCJPyGpSL9vliul6AUvP0JTFiT3am/JS2fJlz2rZKgxLcdd5OJ1iupmHkx/Kol974bo3WaK/3ueSEUXDeg9PO6nUD1jnEW9cj9N11lLj/Y2lZeyfZ0wYmHMoDPzDJCStzWIc2lEo/mXJzId0X7ne+5LrvX8pHw3doO7+AfoSdGLtQMRhuMfoGUEsBAgAAFAAACAgAM2xNR8ffUtPnAQAAlwQAAA0AAAAAAAAAAQAAAAAAAAAAAGJhY2tncm91bmQuanNQSwECAAAUAAAICACckUhHMZUEft0AAACVAQAADAAAAAAAAAABAAAAAAASAgAAY29uc3RhbnRzLmpzUEsBAgAAFAAACAgAtpJIR2OcPF20BAAAtAwAAAoAAAAAAAAAAQAAAAAAGQMAAGNvbnRlbnQuanNQSwECAAAUAAAICAAzbE1HAAAAAAIAAAAAAAAABAAAAAAAAAAAAAAAAAD1BwAAbGliL1BLAQIAABQAAAgIAFNZTUfTnj2KVwEAAPgCAAANAAAAAAAAAAEAAAAAABkIAABtYW5pZmVzdC5qc29uUEsBAgAAFAAACAgA0H1HRwAAAAACAAAAAAAAAAYAAAAAAAAAAAAAAAAAmwkAAHBvcHVwL1BLAQIAABQAAAgIAAB6R0dY/8+ZRQAAAEUAAAAJAAAAAAAAAAEAAAAAAMEJAABSRUFETUUubWRQSwECAAAUAAAICACFg0hHORLWYs0AAACpAQAAEAAAAAAAAAABAAAAAAAtCgAAcG9wdXAvcG9wdXAuaHRtbFBLAQIAABQAAAgIAJyCSEccLy18SAEAAMUDAAAOAAAAAAAAAAEAAAAAACgLAABwb3B1cC9wb3B1cC5qc1BLAQIAABQAAAgIADNsTUcR6qH+hwYAAKAhAAANAAAAAAAAAAEAAAAAAJwMAABsaWIvQVhUcmVlLmpzUEsBAgAAFAAACAgAJ4JIR60Tw47xAAAA6QEAABMAAAAAAAAAAQAAAAAAThMAAGxpYi9Eb2NGcmFnVXRpbHMuanNQSwECAAAUAAAICAApgkhHwtGuF8QBAAAcBgAACwAAAAAAAAABAAAAAABwFAAAbGliL1RhYnMuanNQSwUGAAAAAAwADAC0AgAAXRYAAAAA']
        }
      }
    },

    ie: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        javascriptEnabled: true
      }
    },

    phantom: {
      desiredCapabilities: {
        browserName: 'phantomjs',
        'phantomjs.binary.path': require('phantomjs').path,
        javascriptEnabled: true
      }
    }
  }
};
