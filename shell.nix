# in shell.nix
{ pkgs ? import <nixpkgs> { } }:
with pkgs;
mkShell
{
  packages = [ hugo ];
  shellHook = ''
  '';
}

