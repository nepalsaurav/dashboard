const tickers = [
    "NABIL", "NIMB", "SCB", "HBL", "SBI", "EBL", "NICA", "MBL", "LSL", "KBL", "SBL", "SHL", "TRH", "OHL", "NHPC", "BPCL", "CHCL", "STC", "BBC", "NUBL",
    "CBBL", "DDBL", "SANIMA", "NABBC", "NICL", "RBCL", "NLICL", "HEI", "UAIL", "SPIL", "NIL", "PRIN", "SALICO", "IGI", "NLIC", "LICN", "SICL", "NFS",
    "BNL", "NLO", "GUFL", "CIT", "BNT", "UNL", "BFC", "GFCL", "HDL", "PFL", "NMB", "SIFC", "CFCL", "JFL", "PRVU", "SFCL", "GMFIL", "SWBBL", "ICFC",
    "EDBL", "NTC", "PROFL", "GBIME", "CZBIL", "PCBL", "LBBL", "AHPC", "MDB", "ALICL", "HLI", "NMLBBL", "ADBL", "MLBL", "SJLIC", "GBBL", "JBBL", "CORBL",
    "KSBBL", "MPFL", "SADBL", "SHINE", "MNBBL", "FMDBL", "MFIL", "NBL", "SLBBL", "NLG", "SINDU", "SKBBL", "GBLBS", "RLFL", "SHPC", "KMCDB", "MLBBL",
    "RIDI", "LLBS", "BARUN", "VLBS", "HLBSL", "MATRI", "JSLBB", "API", "NMBMF", "GILB", "SWMF", "MERO", "HIDCL", "NGPL", "GRDBL", "NMFBS", "RSDC",
    "KKHC", "DHPL", "AKPL", "FOWAD", "SPDL", "UMHL", "SMATA", "CHL", "HPPL", "MSLB", "NHDL", "SMB", "USLB", "RADHI", "WNLB", "NADEP", "PMHPL", "KPCL",
    "AKJCL", "JOSHI", "ACLBSL", "UPPER", "SLBSL", "GHL", "ALBSL", "SHIVM", "UPCL", "MHNL", "PPCL", "GMFBS", "HURJA", "GLBSL", "SMFBS", "UNHPL", "ILBS",
    "RHPL", "SJCL", "SAPDBL", "HDHPC", "NRIC", "NICLBSL", "SMPDA", "NRN", "LEC", "SSHL", "SGIC", "MEN", "UMRH", "PMLI", "CGH", "NIFRA", "GLH", "MLBSL",
    "SHEL", "RURU", "CHDC", "JBLB", "SAMAJ", "SRLI", "MKJC", "MLBS", "SAHAS", "TPC", "SPC", "NYADI", "MBJC", "BNHC", "ENL", "NESDO", "GVL", "BHL",
    "ULBSL", "CYCL", "RFPL", "DORDI", "BHDC", "HHL", "UHEWA", "SGHC", "MHL", "USHEC", "RHGCL", "AVYAN", "SPHL", "PPL", "DLBS", "SIKLES", "EHPL", "SHLB",
    "PHCL", "BHPL", "UNLB", "SMHL", "SPL", "SMH", "MKHC", "AHL", "KDL", "TAMOR", "MHCL", "SMJC", "ANLB", "MAKAR", "MKHL", "DOLTI", "BEDC", "CITY",
    "MCHL", "IHL", "MEL", "RAWA", "NRM", "ILI", "USHL", "GCIL", "TSHL", "KBSH", "RNLI", "SNLI", "MEHL", "ULHC", "CLI", "MANDU", "HATHY", "BGWT", "MSHL",
    "SONA", "MMKJL", "TVCL", "VLUCL", "MKCL", "CKHL", "NWCL", "HRL", "SARBTM", "GMLI", "NMIC", "CREST", "OMPL"
  ]

  
  export const tickerForOptions = tickers.map((e) => {
    return {
        label: e,
        value: e
    }
  })



  const sectors = [
    "Microfinance",
    "HydroPower",
    "Hotels And Tourism",
    "Development Bank",
    "Manu.& Pro.",
    "Others",
    "Banking",
    "Non Life Insurance",
    "Mutual Fund",
    "Life Insurance",
    "Finance",
    "Trading",
    "Investment"
]

export const sectorsForOptions = sectors.map((e) => {
  return {
      label: e,
      value: e
  }
})